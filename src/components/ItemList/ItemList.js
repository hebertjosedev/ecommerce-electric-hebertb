import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      <Item productos={products} />
    </>
  );
};

export default ItemList;
