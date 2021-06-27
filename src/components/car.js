import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows,
  useTexture,
  Html,
  useProgress,
} from "@react-three/drei"
import styled from "styled-components"
import tw from "twin.macro"

export function Model(props) {
  const ref = useRef()
  const texture = useTexture(
    "https://ipfs.infura.io:5001/api/v0/cat?arg=QmNffSDksetf7dt84FTeEYySBXmu8TxefNqtjTjrgVvuCw"
  )
  texture.flipY = false

  useFrame(state => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t / 8

    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10 - 1.2
  })

  const { nodes, materials } = useGLTF("/model.glb")
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.emuai_white001.geometry}
        material={nodes.emuai_white001.material}
        position={[0.76, 0.37, 1.04]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.29, 0.29, 0.29]}
      />
      <mesh
        geometry={nodes.emuai_white.geometry}
        material={nodes.emuai_white.material}
        position={[0.76, 0.37, 1.04]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.29, 0.29, 0.29]}
      />
      <group
        position={[-0.04, 0.61, 2.55]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.001, 0.001, 0.001]}
      >
        <mesh
          geometry={nodes.luces.geometry}
          material={materials.Cristal_luces}
        />
        <mesh
          geometry={nodes.luces_1.geometry}
          material={materials.Pintura_carenado}
        />
        <mesh
          geometry={nodes.luces_2.geometry}
          material={materials.Borde_cupula}
        />
        <mesh geometry={nodes.luces_3.geometry} material={materials.Cristal} />
        <mesh
          geometry={nodes.luces_4.geometry}
          material={materials["CarbonFiber001_4K.006"]}
        />
        <mesh
          geometry={nodes.luces_5.geometry}
          material={materials.Neumaticos}
        />
        <mesh
          geometry={nodes.luces_6.geometry}
          material={materials["CarbonFiber001_4K.007"]}
        />
        <mesh
          geometry={nodes.luces_7.geometry}
          material={materials["CarbonFiber001_4K.009"]}
        />
        <mesh
          geometry={nodes.luces_8.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        geometry={nodes.first.geometry}
        position={[0.77, 0.66, 0.4]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.21, 0.21, 0.21]}
      >
        <meshBasicMaterial
          attach="material"
          transparent
          map={texture || materials.first.map}
        />
      </mesh>
      <mesh
        geometry={nodes.second.geometry}
        material={materials.second}
        position={[-0.86, 0.66, 0.37]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.21, 0.21, 0.21]}
      />
    </group>
  )
}

useGLTF.preload("/model.glb")

const Container = styled.div`
  width: 100vmin;
  height: 80vmin;
  margin: auto;
  ${tw`bg-gray-100`};
`

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Car = () => {
  return (
    <Container>
      <Canvas concurrent camera={{ position: [0, 3.5, 0] }}>
        <ambientLight intensity={0.2} castShadow />

        <pointLight position={[10, 10, 10]} castShadow />
        <React.Suspense fallback={<Loader />}>
          <Model position={[0, -1000, 0]} />

          <Environment preset="city" />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.9, 0]}
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

export default Car
