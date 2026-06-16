import { useNavigationContext } from "../context/navcontext";
import Button from "./button";
const LPCreations = () => {

const { creationsData } =useNavigationContext();

return(
<section className=" w-full h-auto  p-4  ">
<div className=" w-full h-auto   flex gap-6 flex-col items-center mt-8 ">

<div className="flex flex-row  justify-center sm:justify-between items-center  max-w-6xl w-full p-2">
 <h2 className="text-2xl md:text-4xl font-Josefin-Sans text-center  ">OUR CREATIONS</h2>
<Button className={"hidden md:block text-sm  font-Josefin-Sans  py-2 px-8 font-bold border "}>SEE ALL </Button> 
</div>

<div className="max-w-6xl flex flex-col items-center gap-8 mb-20  ">
  <ul className="max-w-6xl w-full   flex flex-col gap-7 sm:flex-row  sm:h-auto  sm:flex-wrap sm:flex- sm:items-center sm:justify-center">
    {creationsData.map((item) => (
    <li key={item.id} className="w-full h-25  sm:h-100 sm:w-66 ">
    <div className="relative w-full h-full">
    <picture>
    <img src={`${item.image.mobile}`} alt={`${item.alt}`} className="w-full h-full object-cover sm:hidden "/>
    <img src={`${item.image.desktop}`} alt={`${item.alt}`} className="w-full h-full object-fit hidden sm:block "/>
    </picture>
     <div className="absolute inset-0 bg-linear-to-r from-PBlack/60 to-transparent sm:bg-linear-to-t z-30" />
    <span   className={`absolute bottom-4 left-4 sm:left-12 z-50 text-xl sm:text-3xl ${
      item.title === "The Grid" ? "w-20 sm:w-25" : "w-30 sm:w-36"
    } py-3 leading-5 sm:leading-7 sm:font-normal text-white sm:text-white/80 font-Josefin-Sans`}
  >
    {item.title.toUpperCase()}</span>
    </div>
    </li>
    
    ))}
  
  </ul>
    <Button className={" md:hidden text-sm  font-Josefin-Sans  border py-2 px-8 font-bold "}>SEE ALL </Button> 

</div>

</div>


</section>
)

}
export default LPCreations



