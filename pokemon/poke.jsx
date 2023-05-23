import { useEffect, useState } from "react";

function pickPokemon(props) {
  const [item, setItem] = useState([]);

  function getAllPokemon() {
    fetch(
      `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItem(data);
      })
      .catch((err) => {
        console.log("You couldn't catch that pokemon!");
        console.error(err);
      });
  }
  useEffect(() => {
    getAllPokemon();
  }, []);
  return (
    <div className="MyPokeDex">
        <h1>This should help you find your pokemon!</h1>
        <form onSubmit={onSubmit}>

        </form>
      <ul>
        {item.map((pokemon) => {
          return <li key={pokemon.id}>{pokemon.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default pickPokemon;
