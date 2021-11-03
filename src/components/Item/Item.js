import React from "react";

const Item = () => {
  const products = [
    {
      id: 1,
      producto: "patinete",
      img: "https://www.smartcargo.cl/uploads/1/1/0/2/11028147/published/e22-1-1512x.jpeg?1630533419",
      nombre: "patinete-smart",
      precio: 199000,
    },
    {
      id: 2,
      producto: "bicicleta",
      img: "https://www.smartcargo.cl/uploads/1/1/0/2/11028147/img-4953_orig.jpg",
      nombre: "bicicleta-smart",
      precio: 399000,
    },
    {
      id: 3,
      producto: "motocicleta",
      img: "https://www.smartcargo.cl/uploads/1/1/0/2/11028147/published/niusuqigtsr-45.png?1622139070",
      nombre: "motocicleta-smart",
      precio: 1999000,
    },
    {
      id: 4,
      producto: "auto",
      img: "https://www.smartcargo.cl/uploads/1/1/0/2/11028147/published/x4_1.jpg?1532981887",
      nombre: "auto-smart",
      precio: 7999000,
    },
  ];

  return (
    <div className="contenedor-card">
      {products.map((producto) => (
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
      ))}
    </div>
  );
};

export default Item;
