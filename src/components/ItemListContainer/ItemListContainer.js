import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { PeticionDeProductos } from "../services/peticionDeProductos";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { producto } = useParams();

  useEffect(() => {
    const dbConsultas = PeticionDeProductos(); // conexion con firestore

    if (producto) {
      dbConsultas
        .collection("items")
        .where("producto", "==", `${producto}`)
        .get()
        .then((data) =>
          setProducts(data.docs.map((pro) => ({ id: pro.id, ...pro.data() })))
        ) //traer solo los productos por categoria
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      dbConsultas
        .collection("items")
        .get()
        .then((data) =>
          setProducts(data.docs.map((pro) => ({ id: pro.id, ...pro.data() })))
        ) //traer todos los productos
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [producto]);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <h1>
            <i class="fas fa-spinner"></i>
          </h1>
        </div>
      ) : (
        <div className="container-products-list">
          <div className="contenedor-card">
            <ItemList products={products} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
