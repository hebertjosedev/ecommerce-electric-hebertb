// import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import Logo from "./logo-marca.svg";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="nav">
      <div className="img-logo">
        <img src={Logo} alt="logo-marca" />
      </div>
      <div className="input-busqueda">
        <input type="search" name="search" placeholder="Busqueda" />
        <i class="fas fa-search"></i>
      </div>

      <CartWidget />

      <ul className="navbar">
        <li className="navbar-item">
          <a href="patinetes">Patinetes</a>
        </li>
        <li className="navbar-item">
          <a href="bicicletas">Bicicletas</a>
        </li>
        <li className="navbar-item">
          <a href="motocicletas">Motocicletas</a>
        </li>
        <li className="navbar-item">
          <a href="autos">Autos</a>
        </li>
      </ul>
      <div className="footer-nav">
        <p>© Santiago de chile</p>
      </div>
    </nav>
  );
}

export default NavBar;
