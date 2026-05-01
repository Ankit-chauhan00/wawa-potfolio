import { Canvas } from '@react-three/fiber'

import Experience from './components/Experience'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Interface } from './components/Interface'
import { useState } from 'react'
import { ScrollManager } from './components/ScrollManager'
import { Menu } from './components/Menu'



const App = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);


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

    </>
  )
}

export default App