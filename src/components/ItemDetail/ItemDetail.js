//Aqui va la vista del detalle de cada producto}

import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ productos }) => {
  return (
    <>
      {productos.map((producto) =>
        producto.id === 1 ? (
          <div className="contenedor" key={producto.id}>
            <div className="contenedor-producto-detalle">
              <div className="contenedor-imagen">
                <img
                  src="https://i.ibb.co/3dDdDFw/patinete-electricojpeg.jpg"
                  alt="patinete"
                />
              </div>
              <div className="contenedor-descripcion">
                <h2>{producto.nombre}</h2>
                <div className="detalles">
                  <p>Precio: ${producto.precio}</p>
                  <p>Color: {producto.color}</p>
                  <p>Autonomia: {producto.autonomia}</p>
                  <p>Velocidad Maxima: {producto.velocidadMaxima}</p>
                  <p>Peso maximo de usuario: {producto.pesoMaximoUsuario}</p>
                  <p>Bateria: {producto.bateria}</p>
                  <p>Tiempo de carga: {producto.tiempoDeCarga}</p>
                  <p>Peso de patinete: {producto.pesoPatinete}</p>
                  <p>Edad recomendada: {producto.edadRecomendada}</p>
                </div>
                <div className="stock">
                  <h4>Stock disponible</h4>
                  <span>({producto.stock} disponibles)</span>
                </div>
                <div className="boton-comprar">
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          console.log("no hay")
        )
      )}
    </>
  );
};

export default ItemDetail;
