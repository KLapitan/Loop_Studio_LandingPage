import LPAbout from "./About"
import LPCreations from "./creations"

const creationsData = [

{
  id:0,
  title:"Deep Earth",
 image: {
    mobile: "/images/mobile/image-deep-earth.jpg",
    desktop: "/images/desktop/image-deep-earth.jpg"
  }
},
{
  id:1,
  title:"Night Arcade",
   image: {
    mobile: "/images/mobile/image-night-arcade.jpg",
    desktop: "/images/desktop/image-night-arcade.jpg"
  }
},
{
  id:2,
  title:"Soccer Team VR",
   image: {
    mobile: "/images/mobile/image-soccer-team.jpg",
    desktop: "/images/desktop/image-soccer-team.jpg"
  }
},
{
  id:3,
  title:"The Grid",
   image: {
    mobile: "/images/mobile/image-grid.jpg",
    desktop: "/images/desktop/image-grid.jpg"
  }
},
{
  id:4,
  title:"From Above VR",
   image: {
    mobile: "/images/mobile/image-from-above.jpg",
    desktop: "/images/desktop/image-from-above.jpg"
  }
},
{
  id:5,
  title:"Pocket Borealis ",
   image: {
    mobile: "/images/mobile/image-pocket-borealis.jpg",
    desktop: "/images/desktop/image-pocket-borealis.jpg"
  }
},
{
  id:6,
  title:"The Curiosity",
   image: {
    mobile: "/images/mobile/image-curiosity.jpg",
    desktop: "/images/desktop/image-curiosity.jpg"
  }
},
{
  id:7,
  title:"Make It Fisheye",
   image: {
    mobile: "/images/mobile/image-fisheye.jpg",
    desktop: "/images/desktop/image-fisheye.jpg"
  }
},




];


const LPHero = () => {

return (
<main className="h-auto ">
    <section className="relative w-full  h-auto z-30 ">
    <div className="h-auto ">
    

      {/* background  */}
        <div className="bg-[url('/images/mobile/image-hero.jpg')] bg-cover bg-no-repeat  h-140 place-content-center px-4">
        
            <div className="border-2 border-PWhite h-auto">
              <p className="text-PWhite text-4xl font-Josefin-Sans p-4 leading-9">IMMERSIVE EXPERIENCES THAT DELIVER</p>

            </div>
        
        </div>
    </div>
<LPAbout/>
<LPCreations creations={creationsData}/>
    </section>

</main>


)}
export default LPHero