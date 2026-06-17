import { useNavigationContext } from "../context/navcontext"

const NavModal = () => {
const  { navLinks } =useNavigationContext();



return (
 <section className="fixed left-0 right-0 top-[80px] h-screen bg-PBlack">
  <ul className="flex flex-col gap-4 p-6">
    {navLinks.map((link) => (
      <li
        key={link}
        className="text-white font-Josefin-Sans text-xl"
      >
        {link}
      </li>
    ))}
  </ul>
</section>
)

}
export default NavModal