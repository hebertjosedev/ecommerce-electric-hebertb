import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const sumItem = () => {
    count < stock
      ? setCount(count + 1)
      : alert("Alcanzaste el maximo de unidades disponibles del producto");
  };
  const resItem = () => {
    count > initial ? setCount(count - 1) : alert("El minimo es un producto");
  };

  const onAdd = () => {
    if (count >= 1) {
      alert(`Agregaste ${count} productos `);
    }
  };

  return (
    <div>
      <div className="contenedor-contador">
        <button className="botones-contador mas" onClick={sumItem}>
          +
        </button>
        <label> Cantidad: {count}</label>
        <button className="botones-contador menos" onClick={resItem}>
          -
        </button>
        <button className="botones-contador agregar" onClick={onAdd}>
          Agregar
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
