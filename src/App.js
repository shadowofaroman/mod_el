import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BookModel from './components/BookModel.js';
import './App.css'

function CameraController({ cameraPosition }) {
  useFrame(({ camera }) => {
    // Smoothly move the camera to the target position
    camera.position.lerp(
      { x: cameraPosition[0], y: cameraPosition[1], z: cameraPosition[2] },
      0.1
    );
    camera.lookAt(0, 0, 0); // Center the camera on the model
  });
  return null;
}

function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 1, 5]); // Default position

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={true} enablePan={false} />

        {/* Load BookModel within Canvas */}
        <BookModel position={[0, 0, 0]} />

        {/* Camera controller to handle smooth movement */}
        <CameraController cameraPosition={cameraPosition} />
      </Canvas>

      {/* Buttons to change camera position */}
      <div>
      <div className="controls">
        
        <button >Ever thought of what would be your vision see if you fell into a GIANT cocacola can?</button>
        <button onClick={() => setCameraPosition([0, 5, 0])}>When Falling</button>
        <button onClick={() => setCameraPosition([0, -5, 0])}>After falling</button>
        {/*<button >Any ideas on how to get out?</button>*/}
        
      </div>
      </div>

    </div>
  );
}

export default App;
