import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer({ saludo }) {
  return (
    <div>
      <ItemCount initial={1} stock={5} />
    </div>
  );
}

export default ItemListContainer;
