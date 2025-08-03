import * as THREE from "three/webgpu";
import type { WebGPURendererParameters } from "three/src/renderers/webgpu/WebGPURenderer.js";
import { Canvas } from "@react-three/fiber";
import type { CanvasProps } from "@react-three/fiber";
import { useRef } from "react";

export function WebGPUCanvas({
    onRendererSet,
    children,
    ...rest
}: CanvasProps & {
    onRendererSet?: (renderer: THREE.WebGPURenderer) => void;
    children: React.ReactNode;
}) {
    const renderRef = useRef<THREE.WebGPURenderer>(null!);

    return (
        <Canvas
            {...rest}
            gl={async (props) => {
                const renderer = new THREE.WebGPURenderer(
                    props as WebGPURendererParameters
                );
                await renderer.init();
                renderRef.current = renderer;
                if (onRendererSet) onRendererSet(renderer);
                return renderer;
            }}>
            {children}
        </Canvas>
    );
}
