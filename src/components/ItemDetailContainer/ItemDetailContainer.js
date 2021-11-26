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
    const dbConsultas = PeticionDeProductos();
    dbConsultas //este es para traer solo un producto pro su id
      .collection("items")
      .doc(id)
      .get() //traer uno por el id
      .then((res) => setProducto([{ id: res.id, ...res.data() }]))
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
