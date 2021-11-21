import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState(false);

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
      setProductosCarrito(true);
    } else {
      setCartList([...cartList, item]);
      setProductosCarrito(true);
    }
  };

  const removerProducto = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const limpiarCarrito = () => {
    setCartList([]);
    setProductosCarrito(false);
  };

  const productoEnCarrito = (item) => {
    return cartList.some((cartItem) => cartItem.id === item.id);
  };

  const sumaProductos = () => {
    let cantidadProducto = [];
    let suma = 0;
    cartList.forEach((element) => {
      cantidadProducto.push(element.cantidad);
    });
    cantidadProducto.forEach((cantidad) => {
      suma += cantidad;
    });
    return suma;
  };

  const formatoPesoChileno = (numero) => {
    return new Intl.NumberFormat("es-CL").format(numero);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        productosCarrito,
        formatoPesoChileno,
        setProductosCarrito,
        agregarCarrito,
        productoEnCarrito,
        removerProducto,
        limpiarCarrito,
        sumaProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
