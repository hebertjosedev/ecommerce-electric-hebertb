import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./CartProducts.css";
import firebase from "firebase";
import "firebase/firestore";
import { PeticionDeProductos } from "../services/peticionDeProductos";
import Modal from "../Modal/Modal";

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

  //Cambiar el forEach por un .reduce

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

  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [telefono, setTelefono] = useState();
  const [idOrden, setIdOrden] = useState();
  const [showModal, setShowModal] = useState(false);

  const generarOrden = (e) => {
    e.preventDefault();

    const cliente = { nombre, email, telefono };

    const orden = {};

    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = { cliente };
    orden.total = sumatoriaDelTotal();

    orden.items = cartList.map((productos) => {
      const id = productos.id;
      const nombre = productos.nombre;
      const precio = productos.precio * productos.cantidad;
      const cantidad = productos.cantidad;

      return { id, nombre, precio, cantidad };
    });

    const dbQuery = PeticionDeProductos();
    dbQuery
      .collection("ordenes")
      .add(orden)
      .then((res) => setIdOrden(res.id))
      .catch((err) => console.log(err));

    setShowModal(true);
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
          <div className="contenedor-padre-formulario">
            <div className="contenedor-formulario">
              <h2>Necesitamos los siguientes datos:</h2>
              <form className="formulario">
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  onChange={(e) => setNombre(e.target.value)}
                />
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="telefono">Telefono</label>
                <input
                  type="text"
                  id="telefono"
                  onChange={(e) => setTelefono(e.target.value)}
                />
                <div className="contenedor-boton-orden">
                  <button onClick={generarOrden}>Generar orden</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showModal === true ? (
        <Modal
          nombre={nombre}
          email={email}
          telefono={telefono}
          idOrden={idOrden}
          total={sumatoriaDelTotal()}
          modal={showModal}
        />
      ) : (
        console.log("no funciono")
      )}
    </>
  );
};

export default CartProducts;
