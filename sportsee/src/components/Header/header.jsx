import React from "react";
import Logo from "./logo";
import Nav from "./nav";
import "../../styles/style.css";

/**
 *
 * @returns Logo and navigation of header
 */

function Header() {
  return (
    <div className="sportsee-header">
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
