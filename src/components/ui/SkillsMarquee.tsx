import { Fragment } from "react";

const defaultItems = [
    "React.js",
    "React Native",
    "Angular",
    "TypeScript",
    "JavaScript ES6+",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
];

type SkillsMarqueeProps = {
    items?: string[];
};

function Track({ items, hidden = false }: { items: string[]; hidden?: boolean }) {
    return (
        <div
            aria-hidden={hidden}
            className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused]"
        >
            {items.map((item) => (
                <Fragment key={item}>
                    <span className="px-12 text-sm whitespace-nowrap text-[#9AA0B2]">{item}</span>
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
