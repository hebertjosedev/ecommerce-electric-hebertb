//Aqui va la vista del detalle de cada producto}

import React from "react";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productos }) => {
  const { nombre } = useParams();
  return (
    <>
      {productos.map((producto) =>
        producto.nombre === nombre ? (
          <div className="contenedor-producto-detalle" key={producto.id}>
            <div className="contenedor-imagen">
              <img src={`${producto.img}`} alt="patinete" />
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
                <p>Peso: {producto.peso}</p>
                <p>Edad recomendada: {producto.edadRecomendada}</p>
              </div>
              <div className="stock">
                <h4>Stock disponible</h4>
                <span>({producto.stock} disponibles)</span>
              </div>
              <div className="boton-comprar">
                <ItemCount
                  initial={1}
                  stock={producto.stock}
                  producto={producto.nombre}
                />
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
