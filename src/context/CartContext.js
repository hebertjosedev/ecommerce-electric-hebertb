import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (item) => {
    if (productoEnCarrito(item)) {
      let nuevoCarrito = cartList;
      nuevoCarrito.forEach((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.cantidad += cartItem.cantidad;
          return cartItem;
        }
      });
      setCartList(nuevoCarrito);
    } else {
      setCartList([...cartList, item]);
    }
  };

  const removerProducto = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const limpiarCarrito = () => {
    setCartList([]);
  };

  const productoEnCarrito = (item) => {
    return cartList.some((cartItem) => cartItem.id === item.id);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        removerProducto,
        limpiarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
