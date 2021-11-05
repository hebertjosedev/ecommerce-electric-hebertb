import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { PeticionDeProductos } from "../services/peticionDeProductos";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PeticionDeProductos.then((res) => {
      setProducts(res); //aca nos devuelve un array del stock de productos
    })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [products]);
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
          <ItemCount initial={1} stock={5} />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
