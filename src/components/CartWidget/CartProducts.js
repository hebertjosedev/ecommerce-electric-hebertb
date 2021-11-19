import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartProducts = () => {
  const { cartList } = useCartContext();
  console.log(cartList);
  return (
    <>
      <h1>Has agregado al carrito los siguientes productos</h1>

      {cartList.length > 0 &&
        cartList.map((prod) => <li key={prod.id}>{prod.nombre}</li>)}
    </>
  );
};

export default CartProducts;
