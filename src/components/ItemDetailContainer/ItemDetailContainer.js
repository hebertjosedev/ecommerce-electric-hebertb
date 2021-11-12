// aqui va la logica para hacer la simulacion de la peticion del producto y mostrarlo en pantalla mediante
// itemDatails
import React, { useState, useEffect } from "react";
import { PeticionDeProductos } from "../services/peticionDeProductos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PeticionDeProductos.then((res) => {
      setProductos(res); //aca nos devuelve un array del stock de productos
    })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productos]);

  return (
    <>
      {loading ? (
        <div className="loading">
          <h1>
            <i class="fas fa-spinner"></i>
          </h1>
        </div>
      ) : (
        <ItemDetail productos={productos} />
      )}
    </>
  );
};

export default ItemDetailContainer;
