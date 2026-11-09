import { jetbrainsMono } from "@/app/fonts";

export default function Skills() {
    return (
        <section id="skills" className={`relative scroll-mt-20 px-5 py-16 sm:px-8 lg:px-10 lg:pt-8 lg:pb-23 xl:px-15 mt-10 ` + jetbrainsMono.className}>
            <div className="flex flex-col gap-5">
                <p className="text-sm tracking-widest text-[#8B8AFF]">02&nbsp;&nbsp;SKILLS</p>

                <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-[#E6E8EF]">
                    Plus que du code<span className="text-[#8B8AFF]">.</span>
                </h2>

                <div className="text-[#9AA0B2] flex justify-between">
                    <p className="text-lg">
                        Les outils et technologies avec lesquels je travaille.
                    </p>
                    <p>
                        Ouvre un fichier pour explorer <span className="text-[#8B8AFF]">↓</span>
                    </p>
                </div>
            </div>
        </section>
    )
}