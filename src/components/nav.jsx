import { useState } from "react";
import { useNavigationContext } from "../context/navcontext";

const LPNav = () => {
const [showLinks,setShowLinks]=useState(false)

const {navLinks} =useNavigationContext();
return(
<nav className="w-full flex justify-center">
    <section className="w-full max-w-6xl absolute flex flex-row justify-between items-center  h-20 z-40 px-4">
      <picture>
      <img src="/logo.svg" alt="logo" className="w-full h-6 " />
      </picture>
    

      <picture>
      <img src={`${showLinks ?  "/icon-close.svg" :"/icon-hamburger.svg"}`} alt={`${showLinks ? "icon-close" : "icon-hamburger"}`} onClick={() => (setShowLinks((prev) => !prev))}  className="md:hidden"/>
      </picture>


      <ul className="hidden md:flex flex-row gap-10 text-white font-Josefin-Sans font-bold"> 
      {navLinks.map((link) => (
      <li key={link}>{link}</li>
      ))}
      
      </ul>
    
    </section>
</nav>

)
}
export default LPNav;