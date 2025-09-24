import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiVercel } from "react-icons/si";

export const Skill = () => {
  const techStack = [
    { logo: <FaReact className="text-blue-400" />, name: "React" },
    { logo: <SiRedux className="text-purple-600" />, name: "Redux" },
    { logo: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
    { logo: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { logo: <SiExpress className="text-gray-700" />, name: "Express.js" },
    { logo: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { logo: <SiVercel className="text-black" />, name: "Vercel" },
    { logo: <FaPython className="text-yellow-500" />, name: "Python" },
  ];

  return (
    <section className="  mt-10 bg-white-600 px-4 mb-20" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12 text-black ">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{tech.logo}</div>
            <p className="text-lg font-semibold text-black dark:text-white">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
