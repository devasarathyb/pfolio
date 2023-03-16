import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import Model from '../components/React'
import { Canvas } from '@react-three/fiber'

export const Development = () => {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.5}>
      <Model/>
      </Stage>
    
    <OrbitControls enableZoom={false}/>
  </Canvas>
  )
}
