import { useEffect, useState } from "react";
import "./Poke.css";

const pokeTypes = [
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
console.log(pokeTypes);
function PickPokemon(props) {
  const [pokeItem, setPokeItem] = useState([]);
  const [rope, setRope] = useState("");
  const [lasso, setLasso] = useState("");

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

  const getTypes = pokeItem.concat(pokeTypes);

  function showPokemon(event) {
    setRope(event.target.value);
  }

  function pokeSelect(bananna) {
    return setLasso(bananna.target.value);
  }

  let pokeFilter = pokeItem;
  if (rope.length > 0) {
    pokeFilter = pokeFilter.filter(pokeCheck);
  }

  function pokeCheck(value, index, array) {
    return value.name.toLowerCase() === rope.toLowerCase();
  }

  let bannanaFilter = pokeItem;
  if (lasso.length > 0) {
    bannanaFilter = bannanaFilter.filter(banannaSelect);
    console.log(bannanaFilter);
  }

  function banannaSelect(value, index, array) {
    console.log(value.type.indexOf(lasso));
    return value.type.indexOf(lasso) + 1;
    
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
          <label htmlFor="Types">Types of Pokemon</label>
          <select name="Types" id="Types" onChange={pokeSelect} value={lasso}>
            {pokeTypes.map((pokeGenre, index) => {
              return (
                <option value={pokeGenre} key={pokeGenre + index}>
                  {pokeGenre}
                </option>
              );
            })}
          </select>
        </li>
        {bannanaFilter.map((pokemon) => {
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
