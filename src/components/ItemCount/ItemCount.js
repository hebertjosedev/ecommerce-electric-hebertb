import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

const AgregarCarrito = ({ boton, cantidad, suma, resta }) => {
  return (
    <>
      <button className="botones-contador mas" onClick={suma}>
        +
      </button>
      <label> Cantidad: {cantidad}</label>
      <button className="botones-contador menos" onClick={resta}>
        -
      </button>
      <button className="botones-contador agregar" onClick={boton}>
        Agregar
      </button>
    </>
  );
};

const IrAlCarrito = () => {
  return (
    <Link to={"/cart"}>
      <button className="botones-contador agregar">ir al carrito</button>
    </Link>
  );
};

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);
  const [buttonType, setButtonType] = useState("agregar");

  const sumItem = () => {
    count < stock
      ? setCount(count + 1)
      : alert("Alcanzaste el maximo de unidades disponibles del producto");
  };
  const resItem = () => {
    count > initial ? setCount(count - 1) : alert("El minimo es un producto");
  };

  const enviarTypeButton = () => {
    setButtonType("irCart");
  };

  return (
    <div>
      <div className="contenedor-contador">
        {buttonType === "agregar" ? (
          <AgregarCarrito
            boton={enviarTypeButton}
            suma={sumItem}
            resta={resItem}
            cantidad={count}
          />
        ) : (
          <IrAlCarrito />
        )}
      </div>
    </div>
  );
}

export default ItemCount;
