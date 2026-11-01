import Image from "next/image";

export default function Header() {

    return (
        <header className="bg-transparent w-full px-8 py-4 flex justify-between items-center font-mono tracking-tight fixed">
            <div className="flex items-center">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={150}
                    height={40}
                    className="h-10 w-auto object-contain brightness-90 hover:brightness-100 transition-all"
                />
            </div>
        </header>
    );
}