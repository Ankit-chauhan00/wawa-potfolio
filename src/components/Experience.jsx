import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
    <OrbitControls/>
    <mesh>
        <boxGeometry/>
        <meshBasicMaterial/>
    </mesh>
    </>
  )
}

export default Experience