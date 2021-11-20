import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartProducts.css";

const CartProducts = () => {
  const { cartList, removerProducto, limpiarCarrito } = useCartContext();
  return (
    <>
      <div className="contenedor-cart">
        <h1>Tus productos</h1>

        <div className="contenedor-limpiar-carrito">
          <button onClick={() => limpiarCarrito()}>Vaciar carrito</button>
        </div>
        {cartList.map((prod) => (
          <div className="contenedor-items">
            <ul key={prod.id} className="lista-items">
              <li>
                <div className="imagen-nombre">
                  <img src={prod.img} alt={prod.nombre} />
                  <span>{prod.nombre}</span>
                </div>
                <div className="contenedor-cantidad">
                  <span>Cantidad: {prod.cantidad}</span>
                  <button onClick={() => removerProducto(prod.id)}>X</button>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartProducts;
