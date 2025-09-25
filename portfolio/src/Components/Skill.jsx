import { FaReact, FaNodeJs, FaPython, FaCuttlefish } from "react-icons/fa";
import { SiMongodb, SiExpress, SiVercel, SiNumpy, SiTensorflow, SiScikitlearn, SiPostman } from "react-icons/si";

export const Skill = () => {
  const techStack = [
    { logo: <FaReact className="text-blue-400" />, name: "React" },
    { logo: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { logo: <SiExpress className="text-gray-700" />, name: "Express.js" },
    { logo: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { logo: <SiVercel className="text-black" />, name: "Vercel" },
    { logo: <FaPython className="text-yellow-500" />, name: "Python" },
    { logo: <SiNumpy className="text-blue-600" />, name: "NumPy" },
    { logo: <SiTensorflow className="text-orange-500" />, name: "TensorFlow" },
    { logo: <SiScikitlearn className="text-purple-600" />, name: "Scikit-learn" },
    { logo: <FaCuttlefish className="text-blue-500" />, name: "C++" },
    { logo: <SiPostman className="text-orange-600" />, name: "Postman" },
  ];

  return (
    <section className="mt-10 px-4 mb-20" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        My Skills
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{tech.logo}</div>
            <p className="text-lg font-semibold text-black ">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
