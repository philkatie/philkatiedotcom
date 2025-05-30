import { RevealOnScroll } from "../RevealOnScroll";
import { SkillPill } from "../SkillPill";

export const About = () => {

    const frontendSkills:Array<string> = ["React", "TypeScript", "TailwindCSS"]
    const backendSkills:Array<string> = ["Node.js", "Python", "MongoDB", "SQL"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Soundbite about how great I am!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <SkillPill skill={tech} key={key} />
                            ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <SkillPill skill={tech} key={key} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-traanslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul>
                                <li>
                                    <strong> B.S.ChE </strong> - Purdue University 2016
                                </li>
                                <li>
                                    <strong> Software Engineering Intensive </strong> - General Assembly 2022
                                </li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-traanslate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Software Developer at Hyphen Solutions (2023-Present)</h4>
                                <p>
                                    Job Description
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold"> Software Developer at PICKUP (2022-2023)</h4>
                                <p>
                                    Job Description
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>;
};