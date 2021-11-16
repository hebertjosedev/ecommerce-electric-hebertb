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
    if (producto) {
      PeticionDeProductos.then((res) => {
        setProducts(res.filter((prod) => prod.producto === producto)); //aca nos devuelve un array del stock de productos
      })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      PeticionDeProductos.then((res) => {
        setProducts(res); //aca nos devuelve un array del stock de productos
      })
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
