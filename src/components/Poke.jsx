import { useEffect, useState } from "react";

function PickPokemon(props) {
  const [item, setItem] = useState([]);
  const [rope, setRope] = useState([]);

  function getAllPokemon() {
    fetch(
      `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItem(data.pokemon);
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

        </li>
        {item.map((pokemon) => {
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
