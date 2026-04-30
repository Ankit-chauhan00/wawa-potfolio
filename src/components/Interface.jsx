
import { useGSAP } from "@gsap/react";
import gsap from "gsap";




export const Section = (props)=>{
    const {children} = props;

    return (
        <section className="h-screen w-screen  max-w-screen-2xl mx-auto flex flex-col items-start justify-center">
            {children}
        </section>
    )

}

export const Interface = () => {

  

    useGSAP(() => {
  gsap.from(".fade-section", {
    opacity: 0,
    y: 80,
    duration: 1,
    stagger: 0.2,
  });
});

 
  return (
  <div className="flex flex-col items-center w-screen">

  <AboutSection  />

  <SkillSection/>
  
  <ContactSection/>
    </div>
  )
}


const AboutSection = () => {
  return (
    <Section>
      <div  className="fade-section ">
        <h1 className="text-5xl font-extrabold leading-snug">
          Hi, I'm
          <span className=" px-1 italic">Ankit Chauhan</span>
        </h1>

        <p className="text-lg text-gray-400 mt-4">
          I design & implement a Idea <br /> into a Real world website
        </p>

        <button className="bg-indigo-400 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
          Contact Me
        </button>
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
            <div className="">
                <h2 className="text-5xl font-bold">Skills</h2>

                <div className="mt-8 space-y-4">
                    {
                        skills.map((skills, idx)=>(
                            <div className="w-64" key={idx}>
                                <h3 className="text-xl font-bold text-gray-800">{skills.title}</h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <div className="h-full bg-indigo-400 rounded-full"
                                    style={{width: `${skills.level}%`}}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="">
                    <h2 className="text-5xl font-bold mt-10">Languages</h2>
                    <div className="mt-8 space-y-4">
                        {
                            languages.map((lan,idx)=>(
                                <div className="w-64" key={idx}>
                                    <h3 className="text-xl font-bold text-gray-800">{lan.title}</h3>
                                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                        <div 
                                        className="h-full bg-indigo-500 rounded-full"
                                        style={{width: `${lan.level}%`}}
                                        >

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Section>
    )
}


const ContactSection = () => {
  return (
    <Section>
        <div className="">
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
      </div>
    </Section>
  );
};
