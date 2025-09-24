import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


export const Project = () => {
  const projects = [
    {
      name: "Portfolio Website",
      img: "https://via.placeholder.com/400x250",
      details: "A modern portfolio website showcasing my work and skills.",
      code: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
    },
    {
      name: "Todo App",
      img: "https://via.placeholder.com/400x250",
      details: "A full-stack Todo application with authentication and notifications.",
      code: "https://github.com/yourusername/todo-app",
      live: "https://todo-app-live.com",
    },
    {
      name: "Job Portal",
      img: "https://via.placeholder.com/400x250",
      details: "A scalable job portal with role-based authentication and job posting.",
      code: "https://github.com/yourusername/job-portal",
      live: "https://job-portal-live.com",
    },
  ];

  return (
    <section id="projects" className="py-10 mb-10 px-4 md:px-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        My Projects
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]} 
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-sm">
              <img
                src={project.img}
                alt={project.name}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.details}</p>
              <div className="flex gap-4">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

