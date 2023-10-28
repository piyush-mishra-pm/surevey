import React from 'react'
import { toast } from 'react-toastify';
import { Canvas } from '@react-three/fiber'
import { Environment, PresentationControls } from '@react-three/drei';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import ModelLoader from './ModelLoader';
import * as CONSTANTS from '../CONSTANTS';
import { selectedAppliaceSelector, setSelectedAppliance } from '../state/sceneSlice';

function loadModels(sceneConfigs, key){{
    if(!sceneConfigs || !sceneConfigs[key] || !Object.keys(sceneConfigs[key].length)){
        toast.info('Nothing to load!');
        return '';
    }

    const dispatch = useDispatch();
    const selectedAppliance = useSelector(selectedAppliaceSelector);

    function onClickCollectionItem(e,index){
        e.stopPropagation();
        console.log('Clicked Collection Item: ' + index + ' ' + sceneConfigs[key][index]['MODEL_NAME']);
        dispatch(setSelectedAppliance(index));
    }
    
    return sceneConfigs[key].map(
        (baseObjConf,index) =>{

            const initialPosition = baseObjConf.POSITION && baseObjConf.POSITION.length ? baseObjConf.POSITION : [0, 0, 0];
            const initialRotation = baseObjConf.ROTATION && baseObjConf.ROTATION.length ? baseObjConf.ROTATION : [0, 0, 0];
            let initialScale = _.cloneDeep(baseObjConf.SCALE && baseObjConf.SCALE.length ? baseObjConf.SCALE : [1, 1, 1]);

            if (selectedAppliance === index && key === CONSTANTS.SCENE_OBJECTS) {
                // Should only alter scale of scene objects (Appliances, not the base props) items on Click.
                initialScale = initialScale.map(s => CONSTANTS.ON_SELECT_SCALE * s);
            }

            return <ModelLoader 
                key={index} 

                position={initialPosition}
                rotation={initialRotation}
                scale={initialScale}
                
                modelProps={baseObjConf} 
                onClickEvent={(e) => onClickCollectionItem(e, index)}
                
                errorMsg={`${baseObjConf.MODEL_NAME} Model Path is null.`}
                successMsg={`${baseObjConf.MODEL_NAME} Model Loaded!`} 
            />
        }
    );
}}

function SceneLoader(props) {

    return (
        <>
            <div>SceneLoader</div>
            <div style={{ "width": "100%", "height": "80%" }}>
                <Canvas>
                    <PresentationControls snap global zoom={0.8} rotation={[Math.PI / 7, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                        <rectAreaLight position={[0, 10, 10]} intensity={5}/>
                        <rectAreaLight position={[5, 0, 0]} intensity={2} rotation={[0, 90, 0]} width={10} height={10}/>
                        {/* <rectAreaLight position={[-5, 0, 0]} intensity={2} rotation={[0, -90, 0]} castShadow="true"/> */}
                        {/** Load Base Model */}
                        {loadModels(props.sceneConfigs, CONSTANTS.SCENE_BASE_OBJECTS)}
                        {/** Load Scene Objects */}
                        {loadModels(props.sceneConfigs, CONSTANTS.SCENE_OBJECTS)}
                    </PresentationControls>
                </Canvas>
            </div>
        </>
    )
}

export default SceneLoader