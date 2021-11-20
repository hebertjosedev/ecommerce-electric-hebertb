import React from "react";
import { Link } from "react-router-dom";

const Item = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => (
        <div className="contenedor-producto" key={producto.id}>
          <div className="imagen-producto">
            <img src={producto.img} alt={producto.producto} />
          </div>
          <div className="nombre-producto">
            <h3>{producto.nombre}</h3>
          </div>
          <div className="precio-producto">
            <span>{producto.precio}</span>
          </div>
          <Link to={`/detalle/${producto.id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Item;
