import LPAbout from "./About"

const LPHero = () => {

return (
<main className="relative w-full max-w-6xl border h-auto z-30">
    <section className="h-auto">
      {/* background  */}
        <div className="bg-[url('./assets/images/mobile/image-hero.jpg')] bg-cover bg-no-repeat  h-140 place-content-center px-4">
        
            <div className="border-2 border-PWhite h-auto">
              <p className="text-PWhite text-4xl font-Josefin-Sans p-4 leading-9">IMMERSIVE EXPERIENCES THAT DELIVER</p>

            </div>
        
        </div>
    </section>

<LPAbout/>

</main>


)}
export default LPHero