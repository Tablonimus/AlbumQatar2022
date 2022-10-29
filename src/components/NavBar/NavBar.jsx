import React from "react";
import { Navbar } from "flowbite-react";
import copa from "../../assets/images/copa.png";
import nav from "../../assets/images/nav.png";

export default function NavBar() {
  return (
    <div className="h-14 bg-[#881136] fixed top w-full h-20 flex items-center justify-center z-30 rounded-b-lg">
      <img src={nav} alt="" className="w-36 " />

      {/* <img src={copa} alt="" className="w-16 mx-2" /> */}
    </div>
  );
}
