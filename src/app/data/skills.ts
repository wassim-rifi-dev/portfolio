import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        role: "Interfaces web modernes et responsives",
        stack: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Angular", "Tailwind CSS", "Next.js"],
        usedIn: [   ],
    },
    {
        category: "Backend",
        role: "Conception et développement d'API REST",
        stack: ["PHP", "Laravel", "Java", "Spring Boot", "REST APIs", "JUnit 5 & Mockito" , "Spring Security", "JWT"],
        usedIn: [],
    },
    {
        category: "Base de données",
        role: "Modélisation et gestion des données",
        stack: ["MySQL", "PostgreSQL"],
        usedIn: [],
    },
    {
        category: "Tools & Environment",
        role: "Versioning, tests, conception et déploiement",
        stack: ["Git", "GitHub", "Postman", "Jira", "VS Code", "IntelliJ IDEA", "Figma", "Linux", "Docker", "Swagger / OpenAPI"],
        usedIn: [],
    },
];