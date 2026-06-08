import { useState } from "react";

const LPNav = () => {
const [showLinks,setShowLinks]=useState(false)

return(
<nav className="h-auto w-full max-w-6xl absolute  border  bg-amber-900">
    <section className="w-full   flex flex-row justify-between items-center  h-20">
      <picture>
      <img src="/logo.svg" alt="logo" className="w-full h-full" />
      </picture>
    

      <picture>
      <img src={`${showLinks ?  "/icon-close.svg" :"/icon-hamburger.svg"}`} alt={`${showLinks ? "icon-close" : "icon-hamburger"}`} onClick={() => (setShowLinks((prev) => !prev))} />
      </picture>
    
    
    </section>
</nav>

)
}
export default LPNav;