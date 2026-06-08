
const LPAbout = () => {
return(
<section className="border border-teal-600 h-auto p-4">
      {/* container  */}
      <div className="mt-15  border w-full flex flex-col gap-5">

          <div className="w-full h-full">
          <picture>
              <img src='/image-interactive.jpg' alt="interactive" className="w-full h-full object-fill" />
          </picture>
          </div>
            {/* description */}
            <div className="px-4 h-auto flex flex-col gap-3 mb-8">
                <h3 className="text-center text-3xl font-Josefin-Sans leading-7">THE LEADER IN INTERACTIVE VR</h3>
                <p className="text-center text-sm text-black/50 font-Alata ">  Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
            </div>          

      
      
      
      
      </div>



</section>

)

}
export default LPAbout;