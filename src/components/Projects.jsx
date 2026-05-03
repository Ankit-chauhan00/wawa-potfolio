import { Image, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber"
import { motion } from "framer-motion";

 const project = [
    {
        title: "Atmos",
        url:"https://atmos-silk.vercel.app/",
        image:"/projects/atmos.png",
        description: "Recreating the atmos website with React three fibe"
    },
     {
        title: "Queen",
        url:"https://www.linkedin.com/posts/ankit-chauhan-849863324_built-a-cinematic-threejs-experience-with-ugcPost-7454919711479431168-GMQD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFH_HvkB3nCfJ1lZ9C_PdS39uwS72Wv88QQ",
        image:"/projects/queen.png",
        description: "Recreating the atmos website with React three fibe"
    },
    {
        title: "GTA-VI",
        url:"https://www.linkedin.com/posts/ankit-chauhan-849863324_webdevelopment-frontend-react-ugcPost-7428697337851674625-uc8y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFH_HvkB3nCfJ1lZ9C_PdS39uwS72Wv88QQ",
        image:"/projects/gta.png",
        description: "Recreating the atmos website with React three fibe"
    },
    {
        title: "Vecna",
        url:"https://www.linkedin.com/posts/ankit-chauhan-849863324_frontenddeveloper-threejs-webgl-ugcPost-7418573852781334528-earf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFH_HvkB3nCfJ1lZ9C_PdS39uwS72Wv88QQ",
        image:"/projects/vecna.png",
        description: "Recreating the atmos website with React three fibe"
    }  
]

const Project =(props)=>{
const {project} = props;
return (
    <group {...props}>
        <mesh position-z={-0.001}>
            <planeGeometry  args={[0.2,1]}/>
            <meshBasicMaterial color="black"  opacity={0.4}/>
        </mesh>
        <Image scale={[2.2,2.5,1]} url={project.image}  toneMapped={false} position-y={0.3} />
        
        <Text font="/fonts/font1.ttf" maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.2} position={[-1, -1,0]}>{project.title}</Text>
        <Text font="/fonts/font1.ttf" maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.1} position={[-1, -1.3,0]}>{project.description}</Text>
    </group>
)
}


export const Projects = ()=>{
    const {viewport} = useThree()
    return (
        
        <group position={[29, -viewport.height * 2 + 2, 10]}  rotation={[0,0.35,0]}>
            {
                project.map((project, idx)=>(
                    <motion.group key={"project_" + idx}
                    position={[idx * 2.5, 0,-2]}
                    >
                        <Project project={project} />
                    </motion.group>
                ))
            }
        </group>
    )
}