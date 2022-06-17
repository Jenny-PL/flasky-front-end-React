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

  const catData2 = [
    {
      id: 1,
      name: "Cosmo",
      saying: "Hellooo Meowww ",
      age: 5,
      color: "tuxedo",
    },
  ];

  const [cats, setCats] = useState(catData1);

  const setCatAge = (id) => {
    console.log("inside SetCataAge", id);
    //create copy of cats
    const olderCats = [...cats];

    //increase age of cat with id
    for (let cat of olderCats) {
      if (cat.id === id) {
        cat.age += 1;
      }
    }
    //call setCats to update array
    setCats(olderCats);
  };

  const deleteCat = (id) => {
    console.log("delete", id);
    const newCats = cats.filter((cat) => cat.id !== id);
    setCats(newCats);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Otter's Flasky</h1>
      </header>
      <button onClick={handleAppCLick}>{placeholder}</button>
      <main>
        {/* adding props to catList.. */}
        <CatList
          catData={cats}
          setCatAgeCallback={setCatAge}
          deleteCatCallback={deleteCat}
        ></CatList>
        {/* <CatList catData={catData2}></CatList> */}
        <Cat></Cat>
      </main>
    </div>
  );
}

export default App;
