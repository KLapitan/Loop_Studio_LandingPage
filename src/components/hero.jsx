import LPAbout from "./About"
import LPCreations from "./creations"



const LPHero = () => {

return (
<main className="h-auto ">
    <section className="relative w-full  h-auto z-30  ">
    <div className="h-auto ">
    

      {/* background  */}
        <div className="bg-[url('/images/mobile/image-hero.jpg')] bg-cover bg-no-repeat  h-140 place-content-center px-4">
        
            <div className="border-2 border-PWhite h-auto">
              <p className="text-PWhite text-4xl font-Josefin-Sans p-4 leading-9">IMMERSIVE EXPERIENCES THAT DELIVER</p>

            </div>
        
        </div>
    </div>
<LPAbout/>
<LPCreations />
    </section>

</main>


)}
export default LPHero