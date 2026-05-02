import { useProgress } from "@react-three/drei"


const LoadingScreen = ({ onComplete }) => {
    const { progress } = useProgress();
    const isLoaded = progress >= 100;

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center space-y-8 px-6 py-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl max-w-md w-full">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                    style={{width: `${progress}%`}}
                />
            </div>

            <div className="space-y-4">
                <h1 className={`text-4xl font-bold text-white font-myfont ${isLoaded ? 'animate-pulse' : ''}`}>
                    {isLoaded ? "Let's Dive" : "Just 1 sec ..."}
                </h1>
                <p className="text-gray-300 text-lg">
                    {isLoaded ? "Ready to explore my portfolio" : "Loading your experience"}
                </p>
                <button
                    className={`w-full px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 ${
                        isLoaded 
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 shadow-xl shadow-purple-500/30' 
                            : 'bg-gray-600 cursor-not-allowed opacity-60'
                    }`}
                    disabled={!isLoaded}
                    onClick={onComplete}
                >
                    {isLoaded ? "Enter Portfolio" : "Loading..."}
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoadingScreen