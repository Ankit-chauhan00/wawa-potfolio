import { ContactShadows, Environment, OrbitControls,  } from "@react-three/drei"
import { Monster } from "./Monster"
import {  useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { Projects } from "./Projects";


const cameraPositions = [
  { x: 0, y: 4, z: 6 },
  { x: 2, y: 2, z: 4 },
  { x: -1, y: -0.5, z: 4},
  { x: 2, y: 0, z: 5 },
];

const lightSettings = [
  { mainIntensity: 30, accentColor: "#ff00ff", accentIntensity: 30, envIntensity: 5 }, 
  { mainIntensity: 55, accentColor: "#60a5fa", accentIntensity: 50, envIntensity: 10 }, 
  { mainIntensity: 10, accentColor: "#fb923c", accentIntensity: 10, envIntensity: 1 }, 
  { mainIntensity: 80, accentColor: "#ff3131", accentIntensity: 55, envIntensity: 16 }, 
];

const Experience = ({section, focusMode, setFocusMode}) => {

  
  const { camera, viewport } = useThree();
  const mainLightRef = useRef();
  const accentLightRef = useRef();
  const environmentRef = useRef();

  useEffect(() => {
     if (focusMode) {
       const centerX = 35;
  const centerY = -viewport.height * 2 + 1.5;

  gsap.to(camera.position, {
    x: centerX,          // ✅ SAME as target
    y: centerY + 6.5,    // slight top offset
    z: 8,                // move back
    duration: 1.2,
    ease: "expo.inOut",
  });

  gsap.to({}, {
    duration: 1.2,
    onUpdate: () => {
      camera.lookAt(centerX + 20, centerY+ 20, 30); // ✅ straight front
    },
  });
  }
  else {
    // 🎬 section camera
    const pos = cameraPositions[section];

    gsap.to(camera.position, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to({}, {
      duration: 1.2,
      onUpdate: () => {
        camera.lookAt(0.2, 0.2, 0);
      },
    });
  }
}, [section, focusMode]);

  useEffect(() => {
    const currentLightSettings = lightSettings[section] || lightSettings[0];
    
    // Animate main light intensity
    gsap.to(mainLightRef.current, {
      intensity: currentLightSettings.mainIntensity,
      duration: 1.5,
      delay: 0.3,
      ease: "power2.inOut",
    });

    // Animate accent light intensity and color
    gsap.to(accentLightRef.current, {
      intensity: currentLightSettings.accentIntensity,
      duration: 1.5,
      delay: 0.3,
      ease: "power2.inOut",
    });

    gsap.to(accentLightRef.current.color, {
      r: new THREE.Color(currentLightSettings.accentColor).r,
      g: new THREE.Color(currentLightSettings.accentColor).g,
      b: new THREE.Color(currentLightSettings.accentColor).b,
      duration: 1.5,
      delay: 0.3,
      ease: "power2.inOut",
    });

    // Animate environment intensity
    gsap.to(environmentRef.current, {
      environmentIntensity: currentLightSettings.envIntensity,
      duration: 1.5,
      delay: 0.3,
      ease: "power2.inOut",
    });

  }, [section]);


  return (
    <>
    {focusMode && (
  <OrbitControls
  target={[30, -viewport.height * 2 + 2.5, 0]}
  />
)}
      <Environment ref={environmentRef} preset="night"  blur={1} resolution={2048} environmentIntensity={7} background  />
      <directionalLight
        ref={mainLightRef}
  position={[-5, 2, -5]}
  intensity={20}
/>
<directionalLight ref={accentLightRef} color="#ec4899" intensity={10} position={[-5, -5, -5]} />
  
      <Monster position={[0.5, -2, -2]} rotation={[-0.2,-0.3, 0]} scale={2} section={section} />
      <ContactShadows
  position={[0, -2.1, 0]}
  opacity={1}
  scale={10}
  blur={1}
/>

<Projects/>

    
    </>
  )
}

export default Experience