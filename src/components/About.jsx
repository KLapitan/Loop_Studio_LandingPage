
const LPAbout = () => {
return(
<section className="w-full h-auto  flex items-center justify-center p-4" >
        
        {/* container */}
        <div className="w-full h-auto  max-w-6xl flex flex-col gap-8 justify-center items-center lg:justify-start lg:h-130  lg:flex-row  mt-10">
            <div className="w-auto h-full ">
            <picture>
                <img src="/image-interactive.jpg" alt="hero-logo" className="w-full h-full object-cover sm:w-175 lg:w-205 lg:h-120" />
            </picture>
            </div>

             <div className="max-w-auto w-full sm:w-lg h-full  flex flex-col gap-3 p-4   bg-white  lg:h-60     lg:-ml-58 lg:mt-59 lg:justify-end lg:items-end   ">

                 <h3 className="text-center text-3xl font-Josefin-Sans leading-7 sm:w-lg sm:text-center md:text-left lg:w-102  ">THE LEADER IN INTERACTIVE VR</h3>
                <p className="text-center text-sm text-black/50 font-Alata sm:w-lg sm:text-center md:text-left lg:w-102  ">  Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
             
             </div>   
        </div>

</section>
)

}
export default LPAbout;

// flex
// lg:h-55  lg:-ml-159 lg:mt-59 lg:justify-end lg:items-end

// absolute
//lg:absolute lg:bottom-8 lg:left-158  lg:w-123 lg:h-55   lg:justify-end lg:items-end   

