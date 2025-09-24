import { MdDarkMode } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { CiBrightnessUp } from "react-icons/ci";
export const Header=()=>{
    const [ismenuopen,setmenuopen]=useState(false);
    const [istoggle,settoggle]=useState(false);
    return(
        <>
<header className="h-[80px] w-full bg-black flex items-center justify-between px-8">
  <div>
    <h1 className="text-white font-bold text-xl">Sudhansh.Tripathi</h1>
  </div>

  <ul className="hidden sm:flex items-center gap-6 text-white">
    <li className="cursor-pointer hover:text-gray-400 transition-colors">Home</li>
    <li className="cursor-pointer hover:text-gray-400 transition-colors">About</li>
    <li className="cursor-pointer hover:text-gray-400 transition-colors">Skills</li>
    <li className="cursor-pointer hover:text-gray-400 transition-colors">Contact</li>
  </ul>

  <div className="flex gap-5">
   {istoggle?<MdDarkMode className="text-white text-4xl cursor-pointer" onClick={()=>settoggle(!istoggle)} />:<CiBrightnessUp className="text-white text-4xl cursor-pointer" onClick={()=>settoggle(!istoggle)} />} 
    <FaBarsStaggered className="text-white text-4xl sm:hidden cursor-pointer"  onClick={()=>setmenuopen(!ismenuopen)}/>
  </div>
</header>
{ismenuopen && (
  <div className="relative h-[100vh]">
    <nav className="absolute top-0 right-0 w-[200px] bg-black z-50  shadow-lg h-full">
      <ul className="flex flex-col items-center gap-4 py-4 text-white">
        <li className="cursor-pointer hover:text-gray-400 transition-colors">Home</li>
        <li className="cursor-pointer hover:text-gray-400 transition-colors">About</li>
        <li className="cursor-pointer hover:text-gray-400 transition-colors">Skills</li>
        <li className="cursor-pointer hover:text-gray-400 transition-colors">Contact</li>
      </ul>
    </nav>
  </div>
)}




        
        </>
    )
}