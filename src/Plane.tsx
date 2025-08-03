import { positionLocal } from "three/tsl";
import { useThree } from "@react-three/fiber";
import * as THREE from "three/webgpu";
import { useEffect, useRef } from "react";

const nodeColorMaterial = new THREE.NodeMaterial();
nodeColorMaterial.colorNode = positionLocal;

const nodeFragmentMaterial = new THREE.NodeMaterial();
nodeFragmentMaterial.fragmentNode = positionLocal;

interface PlaneProps {
    asFragment?: boolean;
    [key: string]: unknown;
}

export function Plane({ asFragment = false, ...rest }: PlaneProps) {
    const { gl, scene, camera } = useThree();
    const meshRef = useRef<THREE.Mesh>(null!);

    useEffect(() => {
        (gl as unknown as THREE.WebGPURenderer).debug
            .getShaderAsync(scene, camera, meshRef.current)
            .then((e) => {
                //console.log(e.vertexShader)
                console.log("fragShader", e.fragmentShader);
            });
    }, [gl, scene, camera]);
    return (
        <mesh
            {...rest}
            material={asFragment ? nodeFragmentMaterial : nodeColorMaterial}
            ref={meshRef}>
            <planeGeometry args={[1, 1]} />
        </mesh>
    );
}
