import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="app">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <section>
          <ItemListContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
