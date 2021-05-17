import React, { useRef } from "react"
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

  useFrame(state => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t / 8

    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10 - 1.2
  })

  const { nodes, materials } = useGLTF("/final_model.glb")
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Carenado001.geometry}
        material={nodes.Carenado001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tapas_ruedas001.geometry}
        material={nodes.tapas_ruedas001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cristal_luces_luces001.geometry}
        material={materials["Cristal_luces.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Paneles_Techo002.geometry}
        material={materials.SolarPanelsMonocrystallineTypeAClean001_4K}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Borde_cupula001_1.geometry}
          material={nodes.Borde_cupula001_1.material}
        />
        <mesh
          geometry={nodes.Borde_cupula001_2.geometry}
          material={materials["Cristal.001"]}
        />
      </group>
      <mesh
        geometry={nodes.Techo001.geometry}
        material={nodes.Techo001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.llanta001_1.geometry}
          material={nodes.llanta001_1.material}
        />
        <mesh
          geometry={nodes.llanta001_2.geometry}
          material={nodes.llanta001_2.material}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.llanta003_1.geometry}
          material={nodes.llanta003_1.material}
        />
        <mesh
          geometry={nodes.llanta003_2.geometry}
          material={nodes.llanta003_2.material}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Neumatico005_1.geometry}
          material={nodes.Neumatico005_1.material}
        />
        <mesh
          geometry={nodes.Neumatico005_2.geometry}
          material={nodes.Neumatico005_2.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/final_model.glb")

const Container = styled.div`
  width: 100vmin;
  height: 80vmin;
  margin: auto;
  ${tw`bg-gray-100`};
`

export default () => {
  return (
    <Container>
      <Canvas concurrent camera={{ position: [0, 3.5, 0] }}>
        <ambientLight intensity={0.2} castShadow />

        <pointLight position={[10, 10, 10]} castShadow />
        <React.Suspense fallback={null}>
          <Model position={[0, -1000, 0]} />
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
          enablePan={false}
        />
      </Canvas>
    </Container>
  )
}
