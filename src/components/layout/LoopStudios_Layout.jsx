import LPHero from "../hero"
import LPNav from "../nav"
import LPFooter from "../footer"

const LSLayout = () => {

const navLinks =["About" ,"Careers" ,"Events", "Products" ," Support"]

const loopSocialLinks = [
{id:0,
  img: '/images/icon-facebook.svg',
  alt:"facebook"
},

{id:1,
 
 img: '/images/icon-twitter.svg',
  alt:"twitter"

},
{
d:2,
  img: '/images/icon-pinterest.svg',
  alt:"pinterest"

},
{
d:3,
 img: '/images/icon-instagram.svg',
  alt:"instagram"
 
},
]


return (
<>
<LPNav/>
<LPHero/>
<LPFooter socialLinks={loopSocialLinks} navLinks={navLinks}/>
</>

)
}
export default LSLayout