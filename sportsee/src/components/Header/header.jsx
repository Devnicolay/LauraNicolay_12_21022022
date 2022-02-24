import Logo from "./logo";
import Nav from "./nav";
import "../../styles/style.css";

function Header() {
  return (
    <div className="sportsee-header">
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
