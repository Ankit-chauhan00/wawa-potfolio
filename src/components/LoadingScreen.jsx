import { useProgress } from "@react-three/drei"


const LoadingScreen = ({ onComplete }) => {
    const progress = useProgress();

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center space-y-8">
            <div className="w-80 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                    style={{width: `${progress}%`}}
                />
            </div>

            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white font-myfont animate-pulse">
                    {progress < 100 ? "Just 1 sec ..." : "Let's Dive"}
                </h1>
                <p className="text-gray-300 text-lg">
                    {progress < 100 ? "Loading your experience" : "Ready to explore my portfolio"}
                </p>
                <button
                    className={`px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 transform ${
                        progress < 100 
                            ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                    }`}
                    disabled={progress < 100}
                    onClick={onComplete}
                >
                    Let's Dive Into My Portfolio
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoadingScreen