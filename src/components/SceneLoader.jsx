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

function loadModels(sceneConfigs){{
    if (!sceneConfigs || !Object.keys(sceneConfigs).length){
        toast.info('Nothing to load!');
        return '';
    }

    // Dummy:
    function dummyEvent(){};
    
    return sceneConfigs.map(
        (baseObjConf,index) =>{

            const initialPosition = baseObjConf.POSITION && baseObjConf.POSITION.length ? baseObjConf.POSITION : [0, 0, 0];
            const initialRotation = baseObjConf.ROTATION && baseObjConf.ROTATION.length ? baseObjConf.ROTATION : [0, 0, 0];
            const initialScale = _.cloneDeep(baseObjConf.SCALE && baseObjConf.SCALE.length ? baseObjConf.SCALE : [1, 1, 1]);

            return <ModelLoader 
                key={index} 

                position={initialPosition}
                rotation={initialRotation}
                scale={initialScale}
                
                modelProps={baseObjConf}
                onClickEvent={(e) => dummyEvent()}
                
                errorMsg={`${baseObjConf.MODEL_NAME} Model Path is null.`}
                successMsg={`${baseObjConf.MODEL_NAME} Model Loaded!`} 
            />
        }
    );
}}

function loadAppliances(applianceConfigs){
    if (!applianceConfigs || !Object.keys(applianceConfigs).length) {
        toast.info('Nothing to load!');
        return '';
    }

    const dispatch = useDispatch();
    const selectedAppliance = useSelector(selectedAppliaceSelector);

    function onClickCollectionItem(e, appGroupId) {
        e.stopPropagation();
        console.log('Clicked Appliance Group: ' + appGroupId);
        dispatch(setSelectedAppliance(appGroupId));
    }

    return Object.entries(applianceConfigs).map(([appGroupId, appGroupConfig], index)=>{
        const startVariantForApplianceGroup = appGroupConfig.SCENE_START_VARIANT;
        const variantConfig = appGroupConfig.VARIANTS[startVariantForApplianceGroup];

        const initialPosition = variantConfig.POSITION && variantConfig.POSITION.length ? variantConfig.POSITION : [0, 0, 0];
        const initialRotation = variantConfig.ROTATION && variantConfig.ROTATION.length ? variantConfig.ROTATION : [0, 0, 0];
        let initialScale = _.cloneDeep(variantConfig.SCALE && variantConfig.SCALE.length ? variantConfig.SCALE : [1, 1, 1]);
        let textPosition = null;

        if (selectedAppliance === appGroupId) {
            // Should only alter scale of scene objects (Appliances, not the base props) items on Click.
            initialScale = initialScale.map(s => CONSTANTS.ON_SELECT_SCALE * s);
            // Show Arrow for Selected object:
            textPosition = variantConfig.TEXT_POSITION && variantConfig.TEXT_POSITION.length ? [
                variantConfig.TEXT_POSITION[0] + initialPosition[0],
                variantConfig.TEXT_POSITION[1] + initialPosition[1],
                variantConfig.TEXT_POSITION[2] + initialPosition[2],
            ] : [0, 0, 0];
        }

        if (!variantConfig.VARIANT_TYPE){
            return <ModelLoader
                key={index}

                position={initialPosition}
                rotation={initialRotation}
                scale={initialScale}

                textPosition={textPosition}

                modelProps={variantConfig}
                onClickEvent={(e) => onClickCollectionItem(e, appGroupId)}

                errorMsg={`${variantConfig.VARIANT_ID} Model Path is null.`}
                successMsg={`${variantConfig.VARIAN_ID} Model Loaded!`}
            />
        }else if(variantConfig.VARIANT_TYPE === CONSTANTS.PRIMITIVE_TYPE.BOX){
            return <CubeWithImages key={index} />;
        }else {
            console.error(`Rendering Not Configured for this ${variantConfig.VARIANT_ID} VARIANT_TYPE`);
            toast.error(`Rendering Not Configured for this ${variantConfig.VARIANT_ID} VARIANT_TYPE`);
        }
    })
}

function SceneLoader(props) {

    return (
        <>
            <div>SceneLoader</div>
            <div style={{ "width": "100%", "height": "80%" }}>
                <Canvas camera={{fov:90}}>
                    <PresentationControls snap global zoom={0.8} rotation={[Math.PI / 7, -Math.PI / 3, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                    <Environment background near={1} far={1000} resolution={256} files={"/heavy-assets/meadow_2_1k.hdr"} ground/>
                        {/** Load Base Model */}
                        {loadModels(props.sceneConfigs)}
                        {/** Load Scene Objects */}
                        {loadAppliances(props.applianceConfigs)}
                    </PresentationControls>
                </Canvas>
            </div>
        </>
    )
}

export default SceneLoader