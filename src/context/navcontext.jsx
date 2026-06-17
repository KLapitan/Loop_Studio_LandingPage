
import { createContext,useContext, useState} from "react";

const navContext = createContext()



const  ContextProvider=({children}) => {

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
const [showLinks,setShowLinks]=useState(false)

return(
<navContext.Provider value={{ creationsData , navLinks , loopSocialLinks,showLinks,setShowLinks}}>

{children}

</navContext.Provider>


)

}
export default ContextProvider;

export const useNavigationContext =() => {
return useContext(navContext)

}
