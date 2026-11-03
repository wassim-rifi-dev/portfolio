import { Circle } from "lucide-react";
import Image from "next/image";
import { jetbrainsMono } from "@/app/layout";

export default function Header() {
    return (
        <header className="bg-transparent w-full px-4 py-3 sm:px-8 sm:py-4 flex justify-between items-center font-mono tracking-tight fixed z-39">
            <div className="flex items-center">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={150}
                    height={40}
                    className="h-9 sm:h-10 w-auto object-contain brightness-90 hover:brightness-100 transition-all"
                />
            </div>

            <div className={"flex items-center gap-3 sm:gap-5 text-[#9AA0B2] text-[11px] sm:text-xs font-light whitespace-nowrap tracking-tight " + jetbrainsMono.className}>
                <div>
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                        <Circle
                            className="relative z-10 h-2 w-2 fill-green-500 text-green-500 border-none"
                        />
                    </span>
                </div>

                <div className="flex flex-col items-end gap-0.5 sm:flex-row sm:items-center sm:gap-2.5">
                    <div>
                        <p>Disponible <span className="mx-1">•</span> Basé au Maroc</p>
                    </div>
                    
                    <div className="hidden sm:block text-gray-600">
                        <p>|</p>
                    </div>

                    <div>
                        <p>Full-Stack Developer</p>
                    </div>
                </div>
            </div>
        </header>
    );
}