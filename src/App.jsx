import logo from "./logo.svg";
import "./App.css";
import { pickPokemon, getAllPokemon } from "../pokemon";
import { useState } from "react";

function App(props) {
  const [list, setList] = useState(["Who's that pokemon?!"]);
  const [filter, setFilter] = useState("");
  return (
    <div className="MyPokeDex">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>This should help you find your pokemon!</h1>
      <form onSubmit={onSubmit}></form>
      <ul>
        {item.map((pokemon) => {
          return <li key={pokemon.id}>{pokemon.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
