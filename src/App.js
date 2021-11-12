import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProducts from "./components/CartWidget/CartProducts";

function App() {
  return (
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
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
