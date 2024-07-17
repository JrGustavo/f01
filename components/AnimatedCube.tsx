"use client"

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Cube = () => {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial map={new THREE.TextureLoader().load('/Cube.jpg')} />
        </mesh>
    );
};

const AnimatedCube = () => {
    return (
        <Canvas style={{ height: '400px' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Cube />
        </Canvas>
    );
};

export default AnimatedCube;
