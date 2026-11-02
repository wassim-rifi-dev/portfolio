import { jetbrainsMono } from "@/app/layout";

const sections = [
    { name: "home", href:"#" },
    { name: "about", href:"#about" },
    { name: "skills", href:"#skills" },
    { name: "projects", href:"#projects" },
    { name: "formation", href:"#formation" },
    { name: "contact", href:"#contact" },
];

export default function SideBar() {
    return (
        <aside className={`fixed left-0 top-0 z-40 hidden h-screen w-56 flex-col justify-between px-8 pb-8 pt-28 lg:flex ${jetbrainsMono.className}`}>
            <nav className="relative border-l border-[#23273A]">
                
            </nav>
        </aside>
    )
}