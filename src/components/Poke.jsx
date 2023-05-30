import { useEffect, useState } from "react";
import "./Poke.css";

let pokeTypes = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
];
function PickPokemon(props) {
  const [pokeItem, setPokeItem] = useState([]);
  const [rope, setRope] = useState("");
  console.log(pokeItem);
  function getAllPokemon() {
    fetch(
      `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokeItem(data.pokemon);
      })
      .catch((err) => {
        console.log("You couldn't catch that pokemon!");
        console.error(err);
      });
  }
  useEffect(() => {
    getAllPokemon();
  }, []);

  function showPokemon(event) {
    console.log(event);
    console.log(event.target.value);
    setRope(event.target.value);
  }
  let pokeFilter = pokeItem;
  if (rope.length > 0) {
    pokeFilter = pokeItem.filter(pokeCheck);
  }

  function pokeCheck(value, index, array) {
    return value.name.toLowerCase() === rope.toLowerCase();
  }

  return (
    <div className="MyPokeDex">
      <h1>This should help you find your pokemon!</h1>
      {/* <form onSubmit={onSubmit}>

        </form> */}
      <ul>
        <li>
          <input
            onChange={showPokemon}
            type="search"
            name="Pokemon"
            id="PokeSearch"
            value={rope}
          />
        </li>
        <li>
          <label For="Types">Types of Pokemon</label>
          <select name="Types" id="Types">
            {pokeTypes.map((pokeGenre) => {
              return (
                <option value= {pokeGenre}>{pokeGenre}</option>
              )
            })}
          </select>
        </li>
        {pokeFilter.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <p>{pokemon.name}</p>
              <p>{pokemon.type.join(", ")}</p>
              <p> {pokemon.weaknesses.join(", ")}</p>
              <p>{pokemon.num}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PickPokemon;
