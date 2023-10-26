import React from 'react'
import { toast } from 'react-toastify';
import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei';

import ModelLoader from './ModelLoader';

function loadModels(sceneConfigs, key){{
    if(!sceneConfigs || !sceneConfigs[key] || !Object.keys(sceneConfigs[key].length)){
        toast.info('Nothing to load!');
        return '';
    }
    
    return sceneConfigs[key].map(
        (baseObjConf,index) =>
            <ModelLoader 
                key={index} 
                modelProps={baseObjConf} 
                errorMsg={`${baseObjConf.MODEL_NAME} Model Path is null.`}
                successMsg={`${baseObjConf.MODEL_NAME} Model Loaded!`} 
            />
    );
}}

function SceneLoader(props) {

    return (
        <>
            <div>SceneLoader</div>
            <div style={{ "width": "100%", "height": "80%" }}>
                <Canvas>
                    <PresentationControls snap global zoom={0.8} rotation={[Math.PI / 4, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        {/** Load Base Model */}
                        {loadModels(props.sceneConfigs,"SCENE_BASE_OBJECTS")}
                        {/** Load Scene Objects */}
                        {loadModels(props.sceneConfigs, "SCENE_OBJECTS")}
                    </PresentationControls>
                </Canvas>
            </div>
        </>
    )
}

export default SceneLoader