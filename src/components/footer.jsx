import { useNavigationContext } from "../context/navcontext";


const LPFooter = () => {

const {navLinks ,loopSocialLinks}=useNavigationContext();

return(
<footer className="w-full h-auto bg-PBlack flex items-center justify-center ">
    <section className="w-full max-w-6xl h-auto sm:h-49 flex flex-col md:flex-row md:justify-between  gap-9 py-10 sm:py-6 mb-2 sm:mb-0">
    <div className=" flex flex-col  items-center gap-8 md:gap-5 md:justify-center md:items-start  flex-1  md:p-4 lg:p-2">
        <picture>
            <img src="/logo.svg" alt="logo-loopstudio" className="mt-8 sm:mt-7"/>
        </picture>

      <ul className="flex  flex-col md:flex-row gap-7 lg:gap-10 mb-3 ">
        {navLinks.map((link) => (
        <li key={link} className="text-PWhite text-md   font-Alata  cursor-pointer text-center  hover:underline  hover:underline-offset-6" >{link}</li>
        ))}
      </ul>


    </div>
    <div className="flex  flex-col gap-4 items-center md:items-end md:gap-3 md:justify-center  px-4 ">
        <ul className="flex flex-row gap-4 lg:gap-5 p-4">
        {loopSocialLinks.map((link)  => (
        <li key={link.id} className="cursor-pointer">
        <picture>
        <img src={`${link.img}`} alt={`${link.alt}`} />
        </picture>
        </li>
        ))}
        </ul>

      <span className="text-white/49 font-Alata text-md "> © 2021 Loopstudios. All rights reserved.</span>

    </div> 
    </section>
</footer>
)
}
export default LPFooter;