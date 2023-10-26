import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei';
import ModelLoader from './ModelLoader';

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
                        <ModelLoader
                            modelPath={props.sceneConfigs.BASE_MODEL_PATH}
                            errorMsg={`${props.sceneConfigs.USER_TYPE} Base Model Path is null.`}
                            successMsg={`${props.sceneConfigs.USER_TYPE} Base Model Loaded!`}
                        />

                        {/** Load Scene Objects */}

                    </PresentationControls>
                </Canvas>
            </div>
        </>
    )
}

export default SceneLoader