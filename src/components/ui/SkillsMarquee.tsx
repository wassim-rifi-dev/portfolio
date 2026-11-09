import { skills } from "@/app/data/skills";
import { Fragment } from "react";

const defaultItems = [...new Set(skills.flatMap((category) => category.stack))];

type SkillsMarqueeProps = {
    items?: string[];
};

function Track({ items, hidden = false }: { items: string[]; hidden?: boolean }) {
    return (
        <div
            aria-hidden={hidden}
            className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationDuration: `${items.length * 3}s` }}
        >
            {items.map((item) => (
                <Fragment key={item}>
                    <span className="mx-12 inline-block cursor-default text-sm whitespace-nowrap text-[#9AA0B2] transition-all duration-200 ease-out hover:scale-110 hover:text-[#E6E8EF]">
                        {item}
                    </span>
                    <span className="text-[#8B8AFF]">✦</span>
                </Fragment>
            ))}
        </div>
    );
}

export default function SkillsMarquee({ items = defaultItems }: SkillsMarqueeProps) {
    return (
        <div className="group relative flex overflow-hidden [contain:inline-size] border-y border-[#1A1D28] bg-[#0A0B11] py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <Track items={items} />
            <Track items={items} hidden />
        </div>
    );
}
