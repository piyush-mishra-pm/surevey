import React, { useState, useRef, Suspense } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

export function YRotatingBox(props) {
    const meshRef = useRef()
    useFrame((state, delta) => (meshRef.current.rotation.y += delta))

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : .1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export function CubeWithImages() {
    const cubeRef = useRef();

    useFrame((state, delta) => (cubeRef.current.rotation.y += delta))

    // Load textures for each face of the cube
    const textures = useLoader(TextureLoader, '/heavy-assets/imgs/fireplace_timber.jpg');

    return (
        <Suspense>
            <mesh ref={cubeRef} scale={[.3, .3, .3]} position= { [Math.random() * 1, Math.random() * 1, Math.random() * 1]}>
                <boxGeometry />
                <meshStandardMaterial map={textures} side={THREE.DoubleSide} />
            </mesh>
        </Suspense>
    );
}
