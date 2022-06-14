import logo from "./logo.svg";
import "./App.css";
import CatList from "./components/CatList";
import Cat from "./components/Cat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Otter's Flasky</h1>
      </header>
      <main>
        <CatList></CatList>
        <Cat></Cat>
        <Cat></Cat>
        <Cat></Cat>
        <Cat></Cat>
      </main>
    </div>
  );
}

export default App;
