import { Link } from "react-router-dom";
import starWarsLogo from "../assets/img/iconosw.png";
import { Favorites } from "./Favorites";

// ... el resto del componente


export const Navbar = () => {
  return (
    <nav className="navbar starwars-navbar">
      <div className="container">
              
        <Link to="/">
          <img
            src={starWarsLogo}
            alt="Star Wars Logo"
            style={{ height: "100px", marginRight: "10px" }}
          />
        </Link>

        <div className="favorites-right">
          <Favorites />
        </div>
      </div>
    </nav>
  );
};
