import React from 'react'
import { toast } from 'react-toastify';
import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei';
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
        dispatch(setSelectedAppliance(sceneConfigs[key][index]['APPLIANCE_ID']));
    }
    
    return sceneConfigs[key].map(
        (baseObjConf,index) =>{

            const initialPosition = baseObjConf.POSITION && baseObjConf.POSITION.length ? baseObjConf.POSITION : [0, 0, 0];
            const initialRotation = baseObjConf.ROTATION && baseObjConf.ROTATION.length ? baseObjConf.ROTATION : [0, 0, 0];
            let initialScale = _.cloneDeep(baseObjConf.SCALE && baseObjConf.SCALE.length ? baseObjConf.SCALE : [1, 1, 1]);
            let textPosition =null;

            if (selectedAppliance === baseObjConf['APPLIANCE_ID'] && key === CONSTANTS.SCENE_OBJECTS) {
                // Should only alter scale of scene objects (Appliances, not the base props) items on Click.
                initialScale = initialScale.map(s => CONSTANTS.ON_SELECT_SCALE * s);
                // Show Arrow for Selected object:
                textPosition = baseObjConf.TEXT_POSITION && baseObjConf.TEXT_POSITION.length ? [
                    baseObjConf.TEXT_POSITION[0] + initialPosition[0],
                    baseObjConf.TEXT_POSITION[1] + initialPosition[1],
                    baseObjConf.TEXT_POSITION[2] + initialPosition[2],
                ] : [0,0,0];
            }

            return <ModelLoader 
                key={index} 

                position={initialPosition}
                rotation={initialRotation}
                scale={initialScale}

                textPosition={textPosition}
                
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
                    <PresentationControls snap global zoom={0.8} rotation={[Math.PI / 4, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                        <ambientLight intensity={2.5} />
                        <pointLight position={[10, 10, 10]} />
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