import React from 'react'
import { toast } from 'react-toastify';
import { Canvas } from '@react-three/fiber'
import { Environment, PresentationControls } from '@react-three/drei';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import ModelLoader from './ModelLoader';
import * as CONSTANTS from '../CONSTANTS';
import { selectedAppliaceSelector, setSelectedAppliance } from '../state/sceneSlice';
import { CubeWithImages } from './PrimitiveLoader';

function loadModels(sceneConfigs, key){{
    if(!sceneConfigs || !sceneConfigs[key] || !Object.keys(sceneConfigs[key].length)){
        toast.info('Nothing to load!');
        return '';
    }

    const dispatch = useDispatch();
    const selectedAppliance = useSelector(selectedAppliaceSelector);

    function onClickCollectionItem(e,index){
        e.stopPropagation();
        // Filter for only clickable Appliances (base props should not be selected).
        const found = Object.keys(CONSTANTS.APPLIANCE_GROUPS).find(appGroup => appGroup === sceneConfigs[key][index]['APPLIANCE_ID']);
        if(!found){
            console.info(`Wont select ${sceneConfigs[key][index]['APPLIANCE_ID']}, as not in appliance groups (Constant.js).`);
            return;
        }
        console.log('Clicked Appliance Group: ' + sceneConfigs[key][index]['MODEL_NAME']);
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

            // Put conditional rendering for Primitives:
            // return <CubeWithImages key={index} />;
            // return <YRotatingBox key={index}/>

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
                <Canvas camera={{fov:90}}>
                    <PresentationControls snap global zoom={0.8} rotation={[Math.PI / 7, -Math.PI / 3, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                    <Environment background near={1} far={1000} resolution={256} files={"/heavy-assets/meadow_2_1k.hdr"} ground/>
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