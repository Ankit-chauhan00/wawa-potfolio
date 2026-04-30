import { ContactShadows, Environment, } from "@react-three/drei"
import { Monster } from "./Monster"
import { useFrame } from "@react-three/fiber";



const Experience = ({section}) => {

  useFrame((state) => {
  const t = state.clock.getElapsedTime();
  const camera = state.camera;

  const targetX = Math.sin(t * 0.2) * 0.5;
  const targetY = 2 + Math.sin(t * 0.3) * 0.2;

  camera.position.x += (targetX - camera.position.x) * 0.05;
  camera.position.y += (targetY - camera.position.y) * 0.05;
  

  camera.lookAt(0.2, 0.2, 0);
});


  return (
    <>
      <Environment preset="forest"  blur={0.8} resolution={256} environmentIntensity={1} background  />
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