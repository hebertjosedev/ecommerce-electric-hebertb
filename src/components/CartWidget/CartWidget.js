import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { sumaProductos, productosCarrito } = useCartContext();

  return (
    <div>
      <div className="cart visible">
        <i className="fas fa-shopping-cart"></i>
        <span className={productosCarrito ? "visible" : "invisible"}>
          {sumaProductos()}
        </span>
      </div>
    </div>
  );
}

export default CartWidget;
