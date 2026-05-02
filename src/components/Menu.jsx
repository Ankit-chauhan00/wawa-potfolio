import { motion } from "framer-motion";

export const Menu = (props)=>{
    const {onSectionChange, menuOpened, setMenuOpened} = props;

    return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)" }}
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-8 right-8 p-3 rounded-md 
      bg-black/20 backdrop-blur-md border border-white/10 w-12 h-12 items-center "
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </motion.button>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`z-10 fixed top-0 right-0 bottom-0 stransition-all overflow-hidden flex flex-col bg-white/10 backdrop-blur-md border-l border-white/20 shadow-2xl
      ${menuOpened ? "w-96" : "w-0"}`}
      >
        <div className="flex-1 flex items-start  justify-center flex-col gap-10  p-8">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        </div>
      </motion.div>
    </>
  );
}

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};