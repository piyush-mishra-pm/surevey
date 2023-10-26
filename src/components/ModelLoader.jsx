import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { toast } from 'react-toastify';

export default function ModelLoader(props) {
    if (props.modelPath === null || props.modelPath === undefined) {
        toast.error(props.errorMsg);
        return null;
    }

    const gltf = useLoader(GLTFLoader, props.modelPath);
    toast.info(props.successMsg);
    return <primitive object={gltf.scene} />
}