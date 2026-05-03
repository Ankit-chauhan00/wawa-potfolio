import { Canvas } from '@react-three/fiber'

import Experience from './components/Experience'
import {  Scroll, ScrollControls } from '@react-three/drei'
import { Interface } from './components/Interface'
import {  Suspense, useRef, useState } from 'react'
import { ScrollManager } from './components/ScrollManager'
import { Menu } from './components/Menu'
import Volume from './components/Volume'
import { Cursor } from './components/Cursor'
import LoadingScreen from './components/LoadingScreen'



const App = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [volume, setVolume] = useState(0);
  const [loading, setLoading] = useState(true);
  const [focusMode, setFocusMode] = useState(false);
  const audioRef = useRef(null);

   const handleStartAudio = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  };

  


  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Canvas shadows camera={{position: [0,0,6], fov: 25}}>
            <color attach="background" args={["#ececec"]}/>
            <Suspense fallback={null}>
              <ScrollControls pages={4} damping={1}>
                <ScrollManager section={section} onSectionChange={setSection} />
                <Experience section={section} focusMode={focusMode} />
                <Scroll html>
                  <Interface setSection={setSection} setFocusMode={setFocusMode} focusMode={focusMode} />
                </Scroll>
              </ScrollControls>
            </Suspense>
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
            size={60}
            outerSize={20}
            color="indigo-500"
            delay={0.1}
            opacity={1}
          />
        </>
      )}
    </>
  )
}

export default App