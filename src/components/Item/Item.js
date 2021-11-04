import React from "react";

const Item = ({ producto }) => {
  return (
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
      <button>Ver detalle</button>
    </div>
  );
};

export default Item;
