// src/components/BookModel.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

function BookModel({ position }) {
  const { scene } = useGLTF('/freerawscancocacolazerocan.glb'); 
  return <primitive object={scene} position={position} />;
}

export default BookModel;
