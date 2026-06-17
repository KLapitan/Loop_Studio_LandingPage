import { useEffect } from "react";

import { useNavigationContext } from "../context/navcontext"


const NavModal = () => {
const  { navLinks ,setShowLinks } =useNavigationContext();

useEffect(() => {
const escapeKey = (event) => {
  if(event.key === "Escape"){
    setShowLinks(false)  
}
}
  window.addEventListener("keydown" , escapeKey)

return () =>  {window.removeEventListener("keydown", escapeKey)}

},[])


useEffect(() => {
  const removeModal = () => {
    if(window.innerWidth >= 640){
      setShowLinks(false)    
    }
  }
 window.addEventListener("resize" , removeModal)

return () =>  {window.removeEventListener("resize", removeModal)}

},[setShowLinks])



return (
 <section className="fixed inset-0 h-screen bg-PBlack md:hidden">
  <div className="flex flex-row justify-between items-center h-20 border border-white p-4" >

   {/* logo */}
      <picture>
      <img src="/logo.svg" alt="logo" className="w-full h-6 " />
      </picture>
    
      {/* hamburger and close icon */}
      <div className="relative">
      <picture>
      <img src="/icon-close.svg"  alt="icon-close"  onClick={() => setShowLinks(false)}   className="sm:hidden "/>
      </picture>
      </div>
  
  
  
  </div>



  <ul className="flex flex-col gap-4 p-6">
    {navLinks.map((link) => (
      <li
        key={link}
        className="text-white font-Josefin-Sans text-xl"
      >
        {link}
      </li>
    ))}
  </ul>
</section>
)

}
export default NavModal