import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei"
import styled from "styled-components"
import tw from "twin.macro"

export function Model(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF("/model.glb")

  useFrame(state => {
    const t = state.clock.getElapsedTime()
    // ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      position={[-6.43, 0, -20]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[0.01, 0.01, 0.01]}
    >
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Ensamble_Estructura_1.geometry}
        material={materials["152,170,175"]}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Ensamble_Estructura_2.geometry}
        material={materials["0,153,255"]}
      />
    </group>
  )
}

useGLTF.preload("/model.glb")

const Container = styled.div`
  width: 80vmin;
  height: 60vmin;
  margin: auto;
  ${tw`bg-gray-100`};
`
const Input = styled.input`
  ${tw`bg-gray-100`};
`

export default () => {
  return (
    <Container>
      <Canvas concurrent camera={{ position: [0, 0, 2.75] }}>
        <ambientLight intensity={0.2} castShadow />

        <pointLight position={[10, 10, 10]} castShadow />
        <React.Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
        </React.Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom
          enablePan
        />
      </Canvas>
    </Container>
  )
}
