
import { useNavigationContext } from "../context/navcontext";

import NavModal from "../modals/nav.modal";

const LPNav = () => {
const {navLinks, showLinks,setShowLinks} =useNavigationContext();





return(
<nav className="w-full flex justify-center">
    <section className="w-full max-w-6xl absolute flex flex-row justify-between items-center  h-20 z-40 px-4 ">

    {/* logo */}
      <picture>
      <img src="/logo.svg" alt="logo" className="w-full h-6 " />
      </picture>
    
      {/* hamburger and close icon */}
      <div className="relative">
      <picture>
      <img src={`${showLinks ?  "/icon-close.svg" :"/icon-hamburger.svg"}`} alt={`${showLinks ? "icon-close" : "icon-hamburger"}`} onClick={() => (setShowLinks((prev) => !prev))}  className="sm:hidden "/>
      </picture>
     { showLinks && <NavModal/>} 
      </div>

      {/* navlinks */}
      <ul className="hidden sm:flex flex-row gap-10 text-white font-Josefin-Sans font-bold"> 
      {navLinks.map((link) => (
      <li key={link} className=" hover:cursor-pointer group inline-block relative">{link}

      {/* underlined based on project  */}
        <span className="absolute left-1/4 -bottom-2 h-0.5 group-hover:w-1/2 bg-PWhite"></span>
      </li>
      ))}
      
      </ul>
    
    </section>
</nav>

)
}
export default LPNav;