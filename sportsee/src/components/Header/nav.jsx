import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="header-nav">
      <NavLink activeclassname="active-link" to={"/"}>
        Accueil
      </NavLink>
      <NavLink activeclassname="active-link" to="/profil">
        Profil
      </NavLink>
      <NavLink activeclassname="active-link" to={"/settings"}>
        Réglage
      </NavLink>
      <NavLink activeclassname="active-link" to={"/community"}>
        Communauté
      </NavLink>
    </nav>
  );
}

export default Nav;
