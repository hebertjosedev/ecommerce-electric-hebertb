import React from "react";
import "./NavBarMobile.css";

const NavBarMobile = () => {
  return (
    <>
      <div className="menu-hamburguesa">
        <div className="contenedor-boton" id="contenedor-boton">
          <button>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="logo-mobile">
          <i className="fas fa-bolt"></i>
          <h2>SMART ELECTRIC</h2>
        </div>
      </div>
    </>
  );
};

export default NavBarMobile;
