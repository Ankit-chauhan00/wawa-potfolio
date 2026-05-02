import { Canvas } from '@react-three/fiber'

import Experience from './components/Experience'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Interface } from './components/Interface'
import {  useRef, useState } from 'react'
import { ScrollManager } from './components/ScrollManager'
import { Menu } from './components/Menu'
import Volume from './components/Volume'
import { Cursor } from './components/Cursor'



const App = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [volume, setVolume] = useState(0);
  const audioRef = useRef(null);

   const handleStartAudio = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  };





  return (
    <>
    <Canvas shadows camera={{position: [0,0,6], fov: 25}}>

      <color attach="background" args={["#ececec"]}/>

      <ScrollControls pages={3} damping={1}>
        <ScrollManager section={section} onSectionChange={setSection} />

      <Experience section={section} />

      <Scroll html>
        <Interface/>
      </Scroll>

      </ScrollControls>
    </Canvas>

    <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />

    <audio ref={audioRef} src="/sounds/live_fast.mp3" loop/>
    <Volume setVolume={(v)=>{
      setVolume(v);
      if(audioRef.current)
        audioRef.current.volume = v;
    }} 
    onStart={handleStartAudio}
    />

    <Cursor 
      size={10}           // Inner dot size
      outerSize={30}     // Outer ring size
      color="indigo-500" // Color (Tailwind class)
      delay={0.1}        // Delay factor (0-1, lower = faster follow)
      opacity={0.6}      // Opacity (0-1)
    />

    </>
  )
}

export default App