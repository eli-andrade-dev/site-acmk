import React from "react";
import Logo from "../../assets/logo03.png";
import "../Header/StyleHeader.css"

function Header() {
  return (
    <section className="headerLogo">
      
      <img className="logo" src={Logo} alt="" />
      
      
    </section>
  );
}

export default Header;