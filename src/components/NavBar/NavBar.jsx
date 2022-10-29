import React from "react";
import { Navbar } from "flowbite-react";
import copa from "../../assets/images/copa.png";
import nav from "../../assets/images/nav.png";

export default function NavBar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="h-14 bg-[#881136] fixed top w-full h-20 flex items-center justify-between z-30 rounded-b-lg"
    >
      <Navbar.Brand href="">
        <img src={nav} alt="" className="w-36 shadow" />

        {/* <img src={copa} alt="" className="w-16 mx-2" /> */}
      </Navbar.Brand>
   
    </Navbar>
  );
}
