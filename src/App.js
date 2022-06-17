import "./App.css";
import CatList from "./components/CatList";
import Cat from "./components/Cat";
import { useState } from "react";

function App() {
  const [placeholder, setPlaceholder] = useState("hello"); //not sure what this was about... ??

  const handleAppCLick = () => {
    setPlaceholder(placeholder + "!");
  };
  const catData1 = [
    {
      id: 1,
      name: "Jeffy",
      saying: "Meow Meow Meooooww",
      age: 5,
      color: "tabby",
    },
    { id: 2, name: "Lilly", saying: "croaks", age: 5, color: "tuxdeo" },
    { id: 3, name: "FrogCat", saying: "yipyip", age: 5, color: "organge" },
  ];
  //     /* <Cat name="Lilly" saying="croaks" age={2} color="tabby"></Cat>
  // <Cat name="Rich" saying="HELLO THERE!" age="6" color="tuxdeo"></Cat>] */
  const catData2 = [
    {
      id: 1,
      name: "Cosmo",
      saying: "Hellooo Meowww ",
      age: 5,
      color: "tuxedo",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Otter's Flasky</h1>
      </header>
      <button onClick={handleAppCLick}>{placeholder}</button>
      <main>
        <CatList catData={catData1}></CatList>
        <CatList catData={catData2}></CatList>
        <Cat></Cat>
      </main>
    </div>
  );
}

export default App;
