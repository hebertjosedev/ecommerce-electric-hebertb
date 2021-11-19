import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (item, prod) => {
    setCartList([...item, { item: prod }]);
    // setCartList([...cartList, item]);
  };

  const quitarProducto = (id) => {
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
