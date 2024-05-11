import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { H2, H3 , } from "./Typography";

const Navbar = () => {
  return (
    <header className="py-7 flex justify-between px-5 items-center">
      <div>
        <H3 className="text-5xl ">IndieToolkit</H3>
      </div>
      <div>
        <GiHamburgerMenu size={32}/>
      </div>
    </header>
  );
};

export default Navbar;
