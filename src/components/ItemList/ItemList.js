import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((producto) => (
        <Item producto={producto} />
      ))}
    </>
  );
};

export default ItemList;
