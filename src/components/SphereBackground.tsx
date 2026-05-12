import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import { IcosahedronGeometry } from 'three'

function WireframeSphere() {
  const meshRef = useRef<Mesh>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const geometry = useMemo(() => new IcosahedronGeometry(3.5, 2), [])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * 0.15
    meshRef.current.rotation.x += delta * 0.05

    // Subtle parallax toward mouse
    meshRef.current.position.x += (mouseRef.current.x * 0.008 - meshRef.current.position.x) * 0.02
    meshRef.current.position.y += (mouseRef.current.y * 0.008 - meshRef.current.position.y) * 0.02
  })

  // Mouse tracking
  useMemo(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color="#D4AF37"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  )
}

export default function SphereBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <WireframeSphere />
      </Canvas>
    </div>
  )
}
