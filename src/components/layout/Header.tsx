import { Circle } from "lucide-react";
import logo from "../../assets/logo.png";
import { useRealTime } from "../../hooks/useRealTime";

export default function Header() {
    const time = useRealTime();

    return (
        <header className="bg-transparent px-8 py-4 flex justify-between items-center font-mono tracking-tight fix">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto object-contain brightness-90 hover:brightness-100 transition-all" />
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                        <Circle
                            className="relative z-10 h-2 w-2 fill-green-500 text-green-500 border-none"
                        />
                    </span>

                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">
                        Full Stack Developer
                    </span>
                </div>
                
                <div className="flex items-center gap-2 text-[11px] text-gray-500 font-mono">
                    <span>{time}</span>
                    <span className="text-gray-700">——</span>
                </div>
            </div>
        </header>
    );
}