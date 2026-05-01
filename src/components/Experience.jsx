import { ContactShadows, Environment, } from "@react-three/drei"
import { Monster } from "./Monster"
import {  useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";


const cameraPositions = [
  { x: 0, y: 2, z: 5 },
  { x: 1, y: 1, z: 3 },
  { x: -2.1, y: -0.5, z: 4 },
];



const Experience = ({section}) => {
  const { camera } = useThree();
     useEffect(() => {
    const pos = cameraPositions[section];

    gsap.to(camera.position, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: 1.2,
      ease: "bounce.out",
    });

    gsap.to(camera, {
      onUpdate: () => camera.lookAt(0.2, 0.2, 0),
      duration: 1.2,
    });

  }, [section, camera]);



  return (
    <>
      <Environment preset="studio"  blur={1} resolution={1024} environmentIntensity={1.2} background  />
      <directionalLight
  position={[-5, 2, -5]}
  intensity={10}
  color="#4f46e5"
/>
  
      <Monster position={[0.5, -2, -2]} rotation={[-0.2,-0.3, 0]} scale={2} />
      <ContactShadows
  position={[0, -2.1, 0]}
  opacity={1}
  scale={30}
  blur={1}
/>

    
    </>
  )
}

export default Experience