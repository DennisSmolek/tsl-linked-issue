import { useMemo, useRef, useState } from "react";
import * as THREE from "three/webgpu";
import type { ColorNode, ShaderNodeObject } from "../types/three-tsl";
import type Node from "three/src/nodes/core/Node.js";
import { color, uniform, select } from "three/tsl";

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
    const [active, setActive] = useState(false);
    const { colorNode, ...meshProps } = props;

    const { uniforms, finalColorNode } = useMemo(() => {
        const uniforms = {
            hovered: uniform(false),
            colorA: uniform(color("orange")),
            colorB: uniform(color("hotpink")),
        };
        const finalColorNode =
            colorNode ??
            select(uniforms.hovered, uniforms.colorB, uniforms.colorA);

        // Debug logging
        console.log(`BoxR3F instance created:`, {
            uniformsId: uniforms.hovered.id,
            hoveredValue: uniforms.hovered.value,
            finalColorNodeId: finalColorNode.id,
        });

        return { uniforms, finalColorNode };
    }, [colorNode]);

    return (
        <mesh
            {...meshProps}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => (uniforms.hovered.value = true)}
            onPointerOut={() => (uniforms.hovered.value = false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial colorNode={finalColorNode} />
        </mesh>
    );
}
