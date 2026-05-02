import { motion } from "framer-motion";




export const Section = (props)=>{
    const {children} = props;

    return (
        <motion.section className="h-screen w-screen  max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
        initial={{opacity: 0, y:50}}
        whileInView={{opacity:1, y: 0, transition:{ duration: 1, delay: 0.5} }}
        >
          
            {children}
        </motion.section>
    )

}

export const Interface = ({setSection}) => {

  


 
  return (
  <div className="flex flex-col items-center w-screen">

  <AboutSection setSection={setSection}  />

  <SkillSection/>
  
  <ProjectSection/>

  <ContactSection/>
    </div>
  )
}


const AboutSection = ({setSection}) => {
  return (
    <Section>
      <div  className="bg-pink-500/10 backdrop-blur-xl border border-pink-300/20 rounded-2xl p-6">
        <h1 className="text-8xl font-myfont text-gray-50   text-shadow-2xs tracking-tighter">
          Hi, I'm
          <span className=" px-1 italic">Ankit Chauhan</span>
        </h1>

        <motion.p className="text-3xl font-light text-gray-400 mt-3"
        initial={{opacity: 0, y: 25}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 1.5}}
        >
          I design & implement a Idea <br /> into a Real world website
        </motion.p>

        <motion.button className="bg-pink-300 hover:bg-pink-600 font-myfont hover:scale-120 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
        initial={{opacity: 0, y: 25}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 2}}
        onClick={()=>{setSection(3)}}
        >
          Contact Me
        </motion.button>
      </div>
    </Section>
  );
};

const skills = [   
    {
        title: "Threejs / React Three Fiber",
        level: 80,
    },
    {
        title: "React-js / Next-js",
        level: 70,
    },
    {
        title: "Node js ",
        level: 70,
    },
    {
        title: "SQL, Mongodb, Supeerbase",
        level: 60,
    }
];

const languages = [
    {
        title: " English",
        level: 90
    },
    {
        title: "Hindi",
        level: 90
    },
    {
        title: "Punjabli",
        level: 60
    }
]




const SkillSection = ()=>{
    return(
        <Section>
            <motion.div whileInView={"visible"} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                <h2 className="text-5xl font-extrabold font-myfont text-white tracking-wider">Skills</h2>

                <div className="mt-8 space-y-4 ">
                    {
                        skills.map((skills, idx)=>(
                            <div className="w-64" key={idx}>
                                <motion.h3 
                                initial={{
                                  opacity: 0,
                                }}
                                variants={{ visible:{ opacity: 1, transition:{duration: 1, delay: 1+ idx * 0.2} }}}
                                className="text-xl font-bold text-gray-800
                                ">{
                                  skills.title
                                  }
                                  </motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div 
                                    initial={{scaleX: 0, originX: 0}}
                                    variants={{ visible: { scaleX: 1, transition:{ duration: 1, delay: 1 + idx * 0.2 } } }}
                                    className="h-full bg-indigo-400 rounded-full"
                                    style={{width: `${skills.level}%`}}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="">
                    <h2 className="text-5xl font-extrabold font-myfont text-white tracking-wider mt-10">Languages</h2>
                    <div className="mt-8 space-y-4">
                        {
                            languages.map((lan, idx)=>(
                            <div className="w-64" key={idx}>
                                <motion.h3 
                                initial={{
                                  opacity: 0,
                                }}
                                variants={{ visible:{ opacity: 1, transition:{duration: 1, delay: 2+ idx * 0.2} }}}
                                className="text-xl font-bold text-gray-800
                                ">{
                                  lan.title
                                  }
                                  </motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div 
                                    initial={{scaleX: 0, originX: 0}}
                                    variants={{ visible: { scaleX: 1, transition:{ duration: 1, delay: 2 + idx * 0.2 } } }}
                                    className="h-full bg-indigo-400 rounded-full"
                                    style={{width: `${lan.level}%`}}
                                    />
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </motion.div>
        </Section>
    )
}


const ProjectSection = ()=>{
    return(
        <Section>
            <motion.div whileInView={"visible"} className="">
                <h2 className="text-5xl font-bold">Projects</h2>
                <div className="mt-8 text-lg text-gray-300">
                    <p>Coming soon...</p>
                </div>
            </motion.div>
        </Section>
    )
}


const ContactSection = () => {
  return (
    <Section>
        <div className=" bg-white/10 backdrop-blur-md border-l border-white/20 shadow-2xl rounded-2xl p-4">
      <h2 className="text-4xl font-bold font-myfont text-gray-200">Contact me</h2>
      <div className=" p-8 rounded-md bg-transparent w-96 max-w-full">
        <form>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full outline-0 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full outline-0  rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-4"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-20 block w-full outline-0 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-red-400 hover:bg-red-600 hover:scale-85 text-white py-2 px-4 rounded-lg font-light font-myfont text-lg mt-8 ">
            Submit
          </button>
        </form>
      </div>
      </div>
    </Section>
  );
};
