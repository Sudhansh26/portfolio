import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Home = () => {
  return (
    <section
      className="relative mb-10 flex flex-col-reverse md:flex-row items-center justify-around gap-8 md:gap-12 p-8"
      style={{ height: "auto" } } id="home"
    >
     
      <div className="text-center md:text-left p-6 md:w-1/2 mt-[20px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
          I'm Sudhansh Tripathi
        </h1>
        <h2 className="text-xl sm:text-xl md:text-xl font-extrabold text-black mb-4">
          Crafting Intelligence, One Line at a Time
        </h2>
        <p className="text-md sm:text-lg md:text-xl text-black">
          I'm a Backend Developer & ML Enthusiast turning complex data into elegant solutions. Exploring AI, optimizing systems, and building the future of intelligent applications.
        </p>
      </div>

      <div>
        <img
          src="https://res.cloudinary.com/dtlessn0g/image/upload/v1758750300/Gemini_Generated_Image_klz8toklz8toklz8_svxutd.png"
          alt="ML & Backend Illustration"
          className="w-64 sm:w-80 md:w-96 h-auto shadow-2xl hover:scale-105 transition-transform duration-300"
          style={{ borderRadius: "56% 44% 51% 49% / 33% 36% 64% 67%" }}
        />
      </div>

     
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-2.5">
        <a
          href="https://github.com/Sudhansh26"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sudhansh-tripathi-58ba232b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-600 transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="sudhanshtripathi26@gmail.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-500 transition"
          title="Email"
        >
          <HiOutlineMail />
        </a>
      </div>
    </section>
  );
};
