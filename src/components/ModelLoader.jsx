import { toast } from 'react-toastify';
import { useGLTF } from '@react-three/drei';

export default function ModelLoader(props) {
    if (!props.modelProps || !props.modelProps.MODEL_PATH) {
        toast.error(props.errorMsg ? props.errorMsg : 'Error loading model');
        return null;
    }

    const gltf = useGLTF(props.modelProps.MODEL_PATH);
    // toast.info(props.successMsg ? props.successMsg : 'Successfully loaded model');

    return <>
        <primitive onClick={(e)=>props.onClickEvent(e)} object={gltf.scene} position={props.position} rotation={props.rotation} scale={props.scale} />
    </>
}
