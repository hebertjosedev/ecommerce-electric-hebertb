// aqui va la logica para hacer la simulacion de la peticion del producto y mostrarlo en pantalla mediante
// itemDatails
import React, { useState, useEffect } from "react";
import { PeticionDeProductos } from "../services/peticionDeProductos";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    PeticionDeProductos.then((res) => {
      setProductos(res); //aca nos devuelve un array del stock de productos
    }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};

export default ItemDetailContainer;
