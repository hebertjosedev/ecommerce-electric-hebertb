// aqui va la logica para hacer la simulacion de la peticion del producto y mostrarlo en pantalla mediante
// itemDatails
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PeticionDeProductos } from "../services/peticionDeProductos";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    PeticionDeProductos.then((res) => {
      setProducto(res.filter((item) => item.id === parseInt(id))); //aca nos devuelve un array del stock de productos
    })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <>
      {loading ? (
        <div className="loading">
          <h1>
            <i class="fas fa-spinner"></i>
          </h1>
        </div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </>
  );
};

export default ItemDetailContainer;
