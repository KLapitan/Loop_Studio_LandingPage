const LPCreations = ({creations}) => {

return(
<section className="flex flex-col gap-10 items-center justify-center">
<h3 className="font-Josefin-Sans text-center text-3xl mt-15">OUR CREATIONS</h3>


<ul className="px-4 h-auto w-full flex flex-col items-center  justify-center gap-5 md:w-3xl md:px-0 md:mx-0 border md:flex-row md:flex-wrap md:gap-6 md: ">
{creations.map((item) => (
  <li key={item.id} className="border relative h-25 md:h-70 bg-cover  bg-center md:bg-left-center place-content-end flex items-end justify-start " style={{ backgroundImage: `url(${item.image.mobile})`}} >

   <div className="absolute inset-0 bg-linear-to-r from-PBlack/50 to-transparent z-10" />
   
   <p className={`text-xl ${item.title === "The Grid" ? "w-31" :  "w-35"} px-4 py-3 leading-5 text-white font-Josefin-Sans z-40 `}>{item.title.toUpperCase()}</p>
   
 

   </li>

))}

</ul>




</section>


)

}
export default LPCreations