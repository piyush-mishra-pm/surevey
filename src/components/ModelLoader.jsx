import { toast } from 'react-toastify';
import { useGLTF } from '@react-three/drei';

export default function ModelLoader(props) {
    if (!props.modelProps || !props.modelProps.MODEL_PATH) {
        toast.error(props.errorMsg ? props.errorMsg : 'Error loading model');
        return null;
    }

    const gltf = useGLTF(props.modelProps.MODEL_PATH);
    toast.info(props.successMsg ? props.successMsg : 'Successfully loaded model');

    const initialPosition = props.modelProps.POSITION && props.modelProps.POSITION.length ? props.modelProps.POSITION : [0, 0, 0];
    const initialRotation = props.modelProps.ROTATION && props.modelProps.ROTATION.length ? props.modelProps.ROTATION : [0, 0, 0];
    const initialScale = props.modelProps.SCALE && props.modelProps.SCALE.length ? props.modelProps.SCALE : [1, 1, 1];

     return <primitive object={gltf.scene} position={initialPosition} rotation={initialRotation} scale={initialScale} />
}
/* comment */