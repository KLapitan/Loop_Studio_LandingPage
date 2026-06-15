import { useNavigationContext } from "../context/navcontext";

const LPFooter = () => {

return(
<footer className="w-full h-auto bg-PBlack flex items-center justify-center ">
    <section className="w-full max-w-6xl h-auto lg:h-35 flex flex-col md:flex-row md:justify-between  gap-9">
    <div className=" flex flex-col  items-center gap-10 md:gap-5 md:justify-center md:items-start  flex-1">
        <picture>
            <img src="/logo.svg" alt="logo-loopstudio" className="mt-10"/>
        </picture>

      <ul className="flex  flex-col md:flex-row gap-7 lg:gap-10 ">
        {.map((link) => (
        <li className="text-PWhite text-lg  mdL:text-md font-Alata  cursor-pointer text-center  hover:underline  hover:underline-offset-6" >{link}</li>
        ))}
      </ul>


    </div>
    <div className="flex  flex-col gap-6 items-center md:items-end md:gap-6 md:justify-center  px-4 ">
        <ul className="flex flex-row gap-4 lg:gap-5 p-4">
        {socialLinks.map((link)  => (
        <li key={link.id} className="cursor-pointer">
        <picture>
        <img src={`${link.img}`} alt={`${link.alt}`} />
        </picture>
        </li>
        ))}
        </ul>

      <span className="text-white/49 font-Alata text-md"> © 2021 Loopstudios. All rights reserved.</span>

    </div> 
    </section>
</footer>
)
}
export default LPFooter;