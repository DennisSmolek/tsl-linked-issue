import { type JSX, useRef, useState } from "react";
import * as THREE from "three/webgpu";
import type { ColorNode, ShaderNodeObject } from "types/three-tsl";
import type Node from "three/src/nodes/core/Node.js";
import { color } from "three/tsl";

interface BoxProps {
    colorNode?: ColorNode;
    fragmentNode?: ShaderNodeObject<Node>;
    vertexNode?: ShaderNodeObject<Node>;
    transparent?: boolean;
    side?: 0 | 1 | 2; // FrontSide = 0, BackSide = 1, DoubleSide = 2
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: number | [number, number, number];
}

export function Box(props: BoxProps) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const { colorNode, fragmentNode, vertexNode, ...meshProps } = props;

    return (
        <mesh
            {...meshProps}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                colorNode={color("red")}
                fragmentNode={fragmentNode}
                vertexNode={vertexNode}
                transparent={props.transparent}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}
