import { FaSchool } from "react-icons/fa";

export const Education = () => {
  const educationData = [
    {
      year: "2027",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      college: "Thakur College of Engineering & Technology",
      grade: "CGPA: 8.28/10",
    },
    {
      year: "2023",
      degree: "Senior Secondary",
      college: "Sardar Vallabhbhai Patel Vidyalaya Junior College(Senior secondary)",
      grade: "Grade: 70%",
    },
    {
      year: "2021",
      degree: "Secondary",
      college: "St. Francis High School(secondary)",
      grade: "Grade: 83.20%",
    },
  ];

  return (
    <section
      id="education"
      className="py-10 px-4 md:px-20 bg-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Education
      </h2>

      <ol className="items-center sm:flex relative">
        {educationData.map((edu, index) => (
          <li
            key={index}
            className="relative mb-10 sm:mb-0 flex-1 group transition-transform hover:scale-105"
          >
            {/* Icon and connecting line */}
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 ring-4 ring-white shrink-0 transition-transform group-hover:scale-110">
                <FaSchool className="text-white w-5 h-5" />
              </div>
              {index !== educationData.length - 1 && (
                <div className="hidden sm:flex w-full bg-gray-300 h-1 rounded"></div>
              )}
            </div>

            
            <div className="mt-3 sm:pe-8 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                {edu.degree}
              </h3>
              <time className="block mb-2 text-sm font-medium text-purple-600">
                {edu.year}
              </time>
              <p className="text-base text-gray-700">
                {edu.college}
              </p>
              <p className="text-base font-normal text-gray-500">
                {edu.grade}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
