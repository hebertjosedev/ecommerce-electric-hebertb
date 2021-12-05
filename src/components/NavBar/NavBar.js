// import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import Logo from "./smart-electric-logo-oscuro.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <div className="img-logo">
        <Link to="/">
          <img src={Logo} alt="logo-marca" />
        </Link>
      </div>
      <div className="input-busqueda">
        <input type="search" name="search" placeholder="Busqueda" />
        <i className="fas fa-search"></i>
      </div>

      <div className="cart-products">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>

      <ul className="navbar">
        <Link to="/productos/patinetes">
          <li className="navbar-item">
            <a href="patinetes">Patinetes</a>
          </li>
        </Link>
        <Link to="/productos/bicicletas">
          <li className="navbar-item">
            <a href="bicicletas">Bicicletas</a>
          </li>
        </Link>
        <Link to="/productos/motocicletas">
          <li className="navbar-item">
            <a href="motocicletas">Motocicletas</a>
          </li>
        </Link>
        <Link to="/productos/autos">
          <li className="navbar-item">
            <a href="autos">Autos</a>
          </li>
        </Link>
      </ul>
      <div className="footer-nav">
        <p>© Santiago de chile</p>
      </div>
    </nav>
  );
}

export default NavBar;
