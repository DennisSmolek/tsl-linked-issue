import { CameraControls } from "@react-three/drei";
import { WebGPUCanvas } from "./WebGPUCanvas";
import { Box } from "./Box";
import { Plane } from "./Plane";

import "./App.css";

function App() {
    return (
        <>
            <div className='rootWrap'>
                <WebGPUCanvas>
                    <ambientLight />
                    <Box position={[-1, 0, 0]} />
                    <Box position={[1, 0, 0]} />
                    <Plane />
                    <Plane asFragment position={[0, 2, 0]} />
                    <CameraControls />
                </WebGPUCanvas>
            </div>
            <p className='read-the-docs'>
                1. Boxes are isolated objects yet materials and uniforms are
                bound.
                <br />
                2. Boxes use hover to set uniforms. Right box seems ignored.
                <br />
                3. Totally different results when using `positionLocal` as a
                <br />
                fragmentNode (Top) vs a colorNode (Bottom)
            </p>
        </>
    );
}

export default App;
