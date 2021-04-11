import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import styled from "styled-components"
import tw from "twin.macro"

export function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/model.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-6.43, -10, -20]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.02, 0.02]}
      >
        <mesh
          geometry={nodes.Ensamble_Estructura_1.geometry}
          material={materials["152,170,175"]}
        />
        <mesh
          geometry={nodes.Ensamble_Estructura_2.geometry}
          material={materials["0,153,255"]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/model.glb")

const Container = styled.div`
  width: 80vw;
  margin: auto;
  ${tw`bg-gray-100`};
`

export default () => {
  return (
    <Container>
      <Canvas
        concurrent
        pixelRatio={[1, 2]}
        camera={{ position: [0, 0, 2.75] }}
      >
        <ambientLight intensity={0.2} />
        <spotLight
          intensity={0.3}
          angle={0.1}
          penumbra={1}
          position={[5, 25, 20]}
        />
        <pointLight position={[10, 10, 10]} />
        <React.Suspense fallback={null}>
          <Model />
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
