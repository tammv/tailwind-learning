import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
const Navbar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex item-center ">
      <div className="flex item-center">
        <div className="text-20 font-bold mr-2">Nerd card</div>
        <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" />
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu} />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu size={"24px"} className="cursor-pointer" onClick={handleMenu} />
        ) : (
          <>
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover ml-[28px]">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 bg-white p-8 text-center text-13 text-black">
            <li className="cursor-pointer ">Features</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">Our Story</li>
            <li className="cursor-pointer">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
