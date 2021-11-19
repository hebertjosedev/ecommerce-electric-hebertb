import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProducts from "./components/CartWidget/CartProducts";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="app">
          <header className="header">
            <NavBar />
          </header>
          <main className="main">
            <section>
              <Switch>
                <Route exact path="/">
                  <ItemListContainer />
                </Route>
                <Route exact path="/productos/:producto">
                  <ItemListContainer />
                </Route>
                <Route exact path="/cart">
                  <CartProducts />
                </Route>
                <Route exact path="/detail">
                  <ItemDetailContainer />
                </Route>
                <Route exact path="/detalle/:nombre">
                  <ItemDetailContainer />
                </Route>
                <Route exact path="/cart">
                  <CartProducts />
                </Route>
              </Switch>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
