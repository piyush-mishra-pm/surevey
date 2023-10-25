import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { toast } from 'react-toastify';

function ModelLoader(props) {
    if (props.modelPath === null || props.modelPath === undefined) {
        toast.error(props.errorMsg);
        return null;
    }

    const gltf = useLoader(GLTFLoader, props.modelPath);
    toast.info(props.successMsg);
    return <primitive object={gltf.scene} />
}

function SceneLoader(props) {

    return (
        <>
            <div>SceneLoader</div>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <ModelLoader
                    modelPath={props.sceneConfigs.BASE_MODEL_PATH}
                    errorMsg={`${props.sceneConfigs.USER_TYPE} Base Model Path is null.`}
                    successMsg={`${props.sceneConfigs.USER_TYPE} Base Model Loaded!`}
                />
            </Canvas>,
        </>
    )
}

export default SceneLoader