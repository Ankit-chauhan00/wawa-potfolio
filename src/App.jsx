import { Canvas } from '@react-three/fiber'

import Experience from './components/Experience'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Interface } from './components/Interface'
import { useRef, useState } from 'react'
import { ScrollManager } from './components/ScrollManager'
import { Menu } from './components/Menu'
import Volume from './components/Volume'



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



  const fadeVolume = (target) => {
  const audio = audioRef.current;
  if (!audio) return;

  let current = audio.volume;
  const step = target > current ? 0.02 : -0.02;

  const interval = setInterval(() => {
    current += step;

    if ((step > 0 && current >= target) || (step < 0 && current <= target)) {
      current = target;
      clearInterval(interval);
    }

    audio.volume = current;
  }, 30);
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

    <audio ref={audioRef} src="/sounds/live_fast.mp3" loop  />
    <Volume setVolume={(v)=>{
      setVolume(v);
      if(audioRef.current)
        audioRef.current.volume = v;
    }} 
    onStart={handleStartAudio}
    />

    </>
  )
}

export default App