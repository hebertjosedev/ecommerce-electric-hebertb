import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./CartProducts.css";

const CartProducts = () => {
  const {
    cartList,
    removerProducto,
    limpiarCarrito,
    setProductosCarrito,
    formatoPesoChileno,
  } = useCartContext();
  if (cartList.length === 0) {
    setProductosCarrito(false);
  }

  const sumatoriaDelTotal = () => {
    let cantidadTotalPagar = [];
    let totalPagar = 0;
    cartList.forEach((subtotal) => {
      cantidadTotalPagar.push(subtotal.precio * subtotal.cantidad);
    });

    cantidadTotalPagar.forEach((subtotal) => {
      totalPagar += subtotal;
    });

    return formatoPesoChileno(totalPagar);
  };

  return (
    <>
      {cartList.length === 0 ? (
        <div className="carrito-vacio">
          <div className="carrito-contenido">
            <h1>El carrito esta vacio</h1>
            <h3>aprovecha las ofertas de nuestra tienda</h3>
            <Link to={"/"}>
              <button>Quiero comprar</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="contenedor-cart">
          <h1>Tus productos</h1>

          <div className="contenedor-limpiar-carrito">
            <Link to={"/"}>
              <button className="boton-seguir-comprando">
                {"<~"} Seguir comprando
              </button>
            </Link>
            <button onClick={() => limpiarCarrito()}>Vaciar carrito</button>
          </div>
          {cartList.map((prod) => (
            <div className="contenedor-items">
              <ul key={prod.id} className="lista-items">
                <li>
                  <div className="imagen-nombre">
                    <img src={prod.img} alt={prod.nombre} />
                    <div class="contenedor-caracteristicas">
                      {prod.nombre}
                      <p>
                        <span>Color:</span> {prod.color}
                      </p>
                      <p>
                        <span>Precio U:</span> {formatoPesoChileno(prod.precio)}
                      </p>
                      <p className="subtotal">
                        <span>Subtotal:</span>{" "}
                        {formatoPesoChileno(prod.precio * prod.cantidad)}
                      </p>
                    </div>
                  </div>

                  <div className="contenedor-cantidad">
                    <span>{prod.cantidad}</span>
                    <button onClick={() => removerProducto(prod.id)}>X</button>
                  </div>
                </li>
              </ul>
            </div>
          ))}
          <p className="total">Total: {sumatoriaDelTotal()} </p>
        </div>
      )}
    </>
  );
};

export default CartProducts;
