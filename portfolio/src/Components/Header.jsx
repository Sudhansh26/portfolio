import { MdDarkMode } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiBrightnessUp } from "react-icons/ci";
import { useState } from "react";

export const Header = () => {
  const [ismenuopen, setmenuopen] = useState(false);
  const [istoggle, settoggle] = useState(false);

  return (
    <>
  
      <header className="h-[80px] w-full bg-red-400 flex items-center justify-between px-8">
        <div>
          <h1 className="text-white font-bold text-xl">Sudhansh.Tripathi</h1>
        </div>

       
      <ul className="hidden sm:flex items-center gap-6 text-white">
  <li>
    <a href="#home" className="cursor-pointer hover:text-gray-400 transition-colors">
      Home
    </a>
  </li>
  <li>
    <a href="#about" className="cursor-pointer hover:text-gray-400 transition-colors">
      About
    </a>
  </li>
  <li>
    <a href="#skills" className="cursor-pointer hover:text-gray-400 transition-colors">
      Skills
    </a>
  </li>
  <li>
    <a href="#contact" className="cursor-pointer hover:text-gray-400 transition-colors">
      Contact
    </a>
  </li>
</ul>


      
        <div className="flex gap-5">
          {istoggle ? (
            <MdDarkMode
              className="text-white text-4xl cursor-pointer"
              onClick={() => settoggle(!istoggle)}
            />
          ) : (
            <CiBrightnessUp
              className="text-white text-4xl cursor-pointer"
              onClick={() => settoggle(!istoggle)}
            />
          )}
          
        </div>
      </header>

      

     
    <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 sm:hidden z-50">
  <div className="grid h-full grid-cols-4 font-medium">

   
    <a href="#home" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
      <svg
        className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 12l9-9 9 9h-3v9h-12v-9h-3z" />
      </svg>
      <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
    </a>

 
    <a href="#skills" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
      <svg
        className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Skills</span>
    </a>

    
    <a href="#education" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
      <svg
        className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 6v12" />
        <path d="M2 17l10 5 10-5" />
      </svg>
      <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Education</span>
    </a>

   
    <a href="#projects" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
      <svg
        className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
      <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Projects</span>
    </a>
  </div>
</div>

    </>
  );
};
