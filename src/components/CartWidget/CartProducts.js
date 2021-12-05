import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./CartProducts.css";
// import firebase from "firebase";
// import "firebase/firestore";
import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/storage"; // If using Firebase storage
import { PeticionDeProductos } from "../services/peticionDeProductos";
import Modal from "../Modal/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
    return formatoPesoChileno(
      cartList.reduce(
        (acumulador, valor) => acumulador + valor.cantidad * valor.precio,
        0
      )
    );
  };

  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [telefono, setTelefono] = useState();
  const [idOrden, setIdOrden] = useState();
  const [showModal, setShowModal] = useState(false);

  const generarOrden = () => {
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

    setTimeout(() => {
      setShowModal(true);
    }, 1500);
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
            <div className="contenedor-items" key={prod.id}>
              <ul className="lista-items">
                <li>
                  <div className="imagen-nombre">
                    <img src={prod.img} alt={prod.nombre} />
                    <div className="contenedor-caracteristicas">
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
              <Formik
                initialValues={{ nombre: "", email: "", telefono: "" }}
                onSubmit={({ resetForm }) => {
                  resetForm();
                }}
                validate={(valores) => {
                  let errores = {};
                  setNombre(valores.nombre);
                  setEmail(valores.email);
                  setTelefono(valores.telefono);

                  //validacion de nombre

                  if (!valores.nombre) {
                    errores.nombre = "Por favor ingresa un nombre";
                  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                    errores.nombre =
                      "El nombre solo puede contener letras y espacios";
                  }

                  //validacion de correo
                  if (!valores.email) {
                    errores.email = "Por favor ingresa un correo electronico";
                  } else if (
                    !/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/.test(
                      valores.email
                    )
                  ) {
                    errores.email =
                      "El correo solo puede contener letras, numeros, puntos, guiones";
                  }

                  //validacion de telefono

                  if (!valores.telefono) {
                    errores.telefono =
                      "Por favor ingresa un numero de telefono";
                  } else if (!/^\d{7,14}$/.test(valores.telefono)) {
                    errores.telefono =
                      "Ingresa un numero de telefono valido (solo numeros)";
                  }

                  return errores;
                }}
              >
                {({ errors }) => (
                  <Form className="formulario">
                    <label htmlFor="nombre">Nombre</label>
                    <Field
                      type="text"
                      placeholder="Jose"
                      id="nombre"
                      name="nombre"
                    />
                    <ErrorMessage
                      name="nombre"
                      component={() => (
                        <div className="input-error">{errors.nombre}</div>
                      )}
                    />

                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      placeholder="joseromero@gmail.com"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="input-error">{errors.email}</div>
                      )}
                    />

                    <label htmlFor="telefono">Telefono</label>
                    <Field
                      type="text"
                      placeholder="97154824"
                      id="telefono"
                      name="telefono"
                    />
                    <ErrorMessage
                      name="telefono"
                      component={() => (
                        <div className="input-error">{errors.telefono}</div>
                      )}
                    />
                    <div className="contenedor-boton-orden">
                      <button type="submit" onClick={generarOrden}>
                        Generar orden
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}

      {showModal === true && (
        <Modal
          nombre={nombre}
          email={email}
          telefono={telefono}
          idOrden={idOrden}
          total={sumatoriaDelTotal()}
          modal={showModal}
        />
      )}
    </>
  );
};

export default CartProducts;
