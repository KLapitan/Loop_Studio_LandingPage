import { useNavigationContext } from "../context/navcontext";

const LPCreations = () => {

const { creationsData } =useNavigationContext();

return(
<section className="border w-full h-auto border-yellow-400 p-4 ">
<div className="max-w-6xl w-full h-auto border  flex gap-10 flex-col items-center sm:items-start">
 <h2 className="text-3xl font-Josefin-Sans text-center">OUR CREATIONS</h2>

  <ul className="w-auto max-w-4xl   flex flex-col gap-5 sm:flex-row  sm:h-auto  sm:flex-wrap sm:flex-1 sm:items-center sm: border">
    {creationsData.map((item) => (
    <li className="border  w-full h-25  sm:h-75 sm:w-50 ">
    <div className="relative w-full h-full">
    <picture>
    <img src={`${item.image.mobile}`} alt={`${item.alt}`} className="w-full h-full object-cover sm:hidden "/>
    <img src={`${item.image.desktop}`} alt={`${item.alt}`} className="w-full h-full object-cover hidden sm:block "/>
    </picture>
     <div className="absolute inset-0 bg-linear-to-r from-PBlack/60 to-transparent z-30" />
    <span   className={`absolute bottom-4 left-4 z-50 text-xl ${
      item.title === "The Grid" ? "w-20" : "w-30"
    } py-3 leading-5 text-white font-Josefin-Sans`}
  >
    {item.title.toUpperCase()}</span>
    </div>
    </li>
    
    ))}
  
  </ul>


</div>


</section>
)

}
export default LPCreations



