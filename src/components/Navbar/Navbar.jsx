import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import CenterText from "../Center/CenterText";
function Navbar(){
  return (
    <div className="w-full flex justify-between px-10 py-5 bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]">
    <Logo/>
    <Menu/>
    <CenterText/>
    </div>
  );
}
export default Navbar;