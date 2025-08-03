import { CameraControls } from '@react-three/drei';
import { WebGPUCanvas } from './WebGPUCanvas';
import { Box } from './Box';

import './App.css';

function App() {
  return (
    <>
      <div className="rootWrap">
        <WebGPUCanvas>
          <ambientLight />
          <Box position={[0, 1, 0]} />
          <CameraControls />
        </WebGPUCanvas>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
