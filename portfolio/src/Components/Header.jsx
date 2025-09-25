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

      

  <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 sm:hidden z-50">
  <div className="grid h-full grid-cols-5 font-medium text-red-500">
    
    <a href="#home" className="inline-flex flex-col items-center justify-center px-5 hover:text-blue-600">
      <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 12l9-9 9 9h-3v9h-12v-9h-3z" />
      </svg>
      <span className="text-xs">Home</span>
    </a>

    <a href="#skills" className="inline-flex flex-col items-center justify-center px-5 hover:text-blue-600">
      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xs">Skills</span>
    </a>

    <a href="#education" className="inline-flex flex-col items-center justify-center px-5 hover:text-blue-600">
      <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 6v12" />
        <path d="M2 17l10 5 10-5" />
      </svg>
      <span className="text-xs">Education</span>
    </a>

    <a href="#projects" className="inline-flex flex-col items-center justify-center px-5 hover:text-blue-600">
      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h5l2 3h11v9H3V7z" />
      </svg>
      <span className="text-xs">Projects</span>
    </a>

    <a href="#contact" className="inline-flex flex-col items-center justify-center px-5 hover:text-blue-600">
      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V21a2 2 0 01-2.18 2A19.8 19.8 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.83.37 1.63.73 2.36a2 2 0 01-.45 2.18L9.91 11a16 16 0 006.18 6.18l1.74-1.46a2 2 0 012.18-.45c.73.36 1.53.61 2.36.73a2 2 0 011.72 2.18z" />
      </svg>
      <span className="text-xs">Contact</span>
    </a>

  </div>
</div>

    </>
  );
};
