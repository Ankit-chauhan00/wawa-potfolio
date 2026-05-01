import {  useState, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const Volume = ({ setVolume, onStart }) => {
  const [muted, setMuted] = useState(true); // Start muted
  const [glowing, setGlowing] = useState(true); // Start glowing
  
  useEffect(() => {
    // Remove glow after 5 seconds
    const timer = setTimeout(() => {
      setGlowing(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    if (muted && onStart) {
      onStart(); // Start audio when unmuting
    }

    const newMuted = !muted;
    setMuted(newMuted);

    // Set volume: 0 = mute, 1 = full
    setVolume(newMuted ? 0 : 1);
  };

  return (
    <>
    <button
      onClick={handleToggle}
      className={`z-20 fixed top-12 left-12 p-3 w-10 h-10 rounded-md 
      bg-black/20 backdrop-blur-md border border-white/10 
      flex items-center justify-center transition-all duration-300 ${
        glowing ? 'shadow-[0_0_20px_#3b82f6,0_0_40px_#3b82f6,0_0_80px_#3b82f6] animate-pulse' : ''
      }`}
    >
      {muted ? (
        // 🔇 Muted Icon
        <FaVolumeMute className="text-white text-xl" />
        
      ) : (
        // 🔊 Volume Icon
        <FaVolumeUp className="text-white text-xl" />
      )}
    </button>
    </>
  );
};

export default Volume;