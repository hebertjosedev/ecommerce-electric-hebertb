import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="app">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <section>
          {/* <ItemListContainer /> */}
          <ItemDetailContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
