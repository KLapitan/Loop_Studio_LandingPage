import LPAbout from "../About"
import LPCreations from "../creations"
import FoldText from "./FoldedText"


const LPHero = () => {

return (
<main className="h-auto ">
    <section className="relative w-full  h-auto z-30  ">
    <div className="h-auto ">
    

      {/* background  */}
        <div className="bg-[url('/images/mobile/image-hero.jpg')] sm:bg-[url('/images/desktop/image-hero.jpg')]  bg-cover  bg-no-repeat bg-center h-screen flex items-center justify-center ">
        
        <div className="max-w-6xl w-full h-screen  p-2 flex items-center ">
            <div className="border-2 border-PWhite h-auto max-w-6xl w-full lg:w-sm  lg:p-2  ">
              {/* <p className="text-PWhite text-4xl lg:text-5xl lg:w-sm lg:leading-12 font-Josefin-Sans p-4 leading-9">IMMERSIVE EXPERIENCES THAT DELIVER</p> */}
                <FoldText 
                text="IMMERSIVE EXPERIENCES THAT DELIVER"
                splitBy="word"
                hinge="top"
                trigger="mount"
                duration={0.95}
                stagger={0.035}
                ease="power3.out"
                perspective={700}
                creaseShading={0.55}
                fontSize={45}
                fontWeight={300}
                color="#f7f2e8"
                
                
                />


            </div>
        </div>
        
        </div>
    </div>
<LPAbout/>
<LPCreations />
    </section>

</main>


)}
export default LPHero;


// todo : hero title redo or need to go insideof another div?