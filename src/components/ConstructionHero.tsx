'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WireframeStructure() {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.08
    }
  })

  return (
    <group ref={group}>
      {/* Grid foundation */}
      {[-2, -1, 0, 1, 2].map(x =>
        [-2, -1, 0, 1, 2].map(z => (
          <mesh key={`${x}-${z}`} position={[x, -1.5, z]}>
            <boxGeometry args={[0.95, 0.05, 0.95]} />
            <meshBasicMaterial color="#c8a96e" wireframe transparent opacity={0.3} />
          </mesh>
        ))
      )}
      {/* Vertical columns */}
      {[-1.5, -0.5, 0.5, 1.5].map(x =>
        [-1.5, -0.5, 0.5, 1.5].map(z => (
          <mesh key={`col-${x}-${z}`} position={[x, 0, z]}>
            <cylinderGeometry args={[0.05, 0.05, 3.5, 8]} />
            <meshBasicMaterial color="#c8a96e" wireframe />
          </mesh>
        ))
      )}
      {/* Floor slabs */}
      {[-0.5, 0.5, 1.5].map((y, i) => (
        <mesh key={`slab-${i}`} position={[0, y, 0]}>
          <boxGeometry args={[3.5, 0.08, 3.5]} />
          <meshBasicMaterial color="#c8a96e" wireframe transparent opacity={0.25} />
        </mesh>
      ))}
      {/* Diagonal bracing */}
      <mesh position={[0, 0, -1.5]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.04, 2.8, 0.04]} />
        <meshBasicMaterial color="#c8a96e80" wireframe />
      </mesh>
      <mesh position={[0, 0, 1.5]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.04, 2.8, 0.04]} />
        <meshBasicMaterial color="#c8a96e80" wireframe />
      </mesh>
      {/* Roof frame */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[4, 0.05, 4]} />
        <meshBasicMaterial color="#c8a96e" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

export default function ConstructionHero() {
  return (
    <Canvas camera={{ position: [5, 3, 7], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 8]} color="#c8a96e" intensity={0.8} />
      <pointLight position={[-5, 5, -5]} color="#ffffff" intensity={0.2} />
      <WireframeStructure />
    </Canvas>
  )
}
