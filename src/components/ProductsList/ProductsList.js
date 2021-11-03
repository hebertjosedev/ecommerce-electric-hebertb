import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { PeticionDeProductos } from "../services/peticionDeProductos";
import "./Products.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PeticionDeProductos.then((res) => {
      setProducts(res); //aca nos devuelve un array del stock de productos
    })
      // .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [products]);

  return (
    <>
      {loading ? (
        <div className="loading">
          <h1>
            <i class="fas fa-spinner"></i>
          </h1>
        </div>
      ) : (
        <div className="container-products-list">
          <div className="contenedor-card">
            {products.map((producto) => (
              <div className="contenedor-producto" key={producto.id}>
                <div className="imagen-producto">
                  <img src={producto.img} alt={producto.producto} />
                </div>
                <div className="nombre-producto">
                  <h3>{producto.nombre}</h3>
                </div>
                <div className="precio-producto">
                  <span>{producto.precio}</span>
                </div>
                <button>Ver detalle</button>
              </div>
            ))}
          </div>
          <ItemCount initial={1} stock={5} />
        </div>
      )}
    </>
  );
};

export default ProductsList;
