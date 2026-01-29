import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";

const skills = [
  { icon: <FaDatabase />, name: "SQL", level: "80%" },
  { icon: <MdDesignServices />, name: "System Design", level: "60%" },
  { icon: <FaReact />, name: "React", level: "60%" },
  { icon: <FaJs />, name: "JavaScript", level: "80%" },
  { icon: <SiTypescript />, name: "TypeScript", level: "50%" },
  { icon: <FaNodeJs />, name: "Node.js", level: "75%" },
  { icon: <SiExpress />, name: "Express.js", level: "75%" },
  { icon: <SiTailwindcss />, name: "Tailwind", level: "70%" },
  { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
  { icon: <FaCss3Alt />, name: "CSS3", level: "80%" },
  { icon: <SiMongodb />, name: "MongoDB", level: "70%" },
  { icon: <FaPython />, name: "Python", level: "60%" },
  { icon: <FaGitAlt />, name: "Git", level: "75%" },
  { icon: <SiC />, name: "C", level: "50%" },
  { icon: <SiCplusplus />, name: "C++", level: "50%" },
  { icon: <SiNextdotjs />, name: "Next.js", level: "40%" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-light/60">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-light/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">What I Do</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Software Development",
                  desc: "Building robust software applications",
                },
                {
                  title: "Web Development",
                  desc: "Building responsive web applications",
                },
                {
                  title: "System Design",
                  desc: "Architecting scalable systems",
                },
                {
                  title: "API Integration",
                  desc: "Connecting with third-party services",
                },
                {
                  title: "Performance",
                  desc: "Optimizing for speed and efficiency",
                },
                { title: "Testing", desc: "Writing maintainable tests" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-primary/5 p-6 rounded-xl hover:bg-primary/10 transition animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-light/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
