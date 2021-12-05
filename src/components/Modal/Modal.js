import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import { useCartContext } from "../../context/CartContext";

const Modal = ({ nombre, email, telefono, idOrden, total }) => {
  const { limpiarCarrito } = useCartContext();
  return (
    <>
      <div className="contenedor-modal">
        <div className="contenedor-modal--descripcion">
          <div className="modal-titulo">
            <Link to={"/"} onClick={limpiarCarrito}>
              <i className="fas fa-times"></i>
            </Link>
            <h2>
              Orden realizada!{" "}
              <span>
                <i className="fas fa-check-square"></i>
              </span>
            </h2>
          </div>
          <h2>Resumen de tu orden</h2>
          <div className="modal-descripcion">
            <h3>
              Nombre: <span>{nombre}</span>
            </h3>
            <h3>
              Email: <span>{email}</span>
            </h3>
            <h3>
              Telefono: <span>{telefono}</span>
            </h3>
            <h3>
              ID de orden: <span>{idOrden}</span>
            </h3>
            <h3>
              Total pagado: <span>{total}</span>
            </h3>
          </div>
          <span className="span">Gracias por preferirnos.</span>
        </div>
      </div>
    </>
  );
};

export default Modal;
