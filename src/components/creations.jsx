const LPCreations = ({creations}) => {

return(
<section className="flex flex-col gap-10 items-center justify-center">
<h3 className="font-Josefin-Sans text-center text-3xl mt-15">OUR CREATIONS</h3>


<ul className="px-4  max-w-3xl  h-auto w-full flex flex-col  gap-5  md:px-0 md:mx-0 border md:flex-row md:flex-wrap md:gap-6">
{creations.map((item) => (
  <li key={item.id} className="border sm:flex-1  h-25  bg-no-repeat  sm:w-full  md:h-70  md:w-full  bg-cover  bg-center  md:flex-row md:flex-wrap md:items-center md:bg-left-center place-content-end flex items-end justify-start " >
    <div className="relative max-w-full  w-full max-h-80 h-full sm:h-25  md:h-70 md:w-ful ">

    <picture>
      <img src={`${item.image.mobile}`} alt="mobile-logo" className="w-full h-full object-cover object-top-right   md:hidden z-20" />
    </picture>
    <picture>
      <img src={`${item.image.desktop}`} alt="dekstop-logo" className=" hidden md:block w-full h-full object-fit object-center  z-20" />
    </picture>
   <div className="absolute inset-0 bg-linear-to-r from-PBlack/60 to-transparent z-30" />
   
   <p
    className={`absolute bottom-4 left-4 z-50 text-xl ${
      item.title === "The Grid" ? "w-20" : "w-30"
    } py-3 leading-5 text-white font-Josefin-Sans`}
  >
    {item.title.toUpperCase()}
  </p>
    </div>
   
 

   </li>

))}

</ul>




</section>


)

}
export default LPCreations