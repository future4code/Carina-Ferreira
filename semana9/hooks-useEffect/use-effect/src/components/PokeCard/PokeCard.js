import React, { useState, useEffect } from "react";
import axios from "axios";


const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})
  
  

  // método que roda após a montagem do componente
//   componentDidMount() {
//     this.pegaPokemon(this.props.pokemon);
//   }

//   // método que roda após a atualização do componente.
//   // Um dos casos de atualização do componente é a
//   // mudança da props que está sendo passado pra ele
//   componentDidUpdate(prevProps) {
//     // aqui, é feita uma verificação da props anterior com a props atual.
//     // Caso a props anterior seja diferente da props atual,
//     // a função pegaPokemon é chamada.
//     if (prevProps.pokemon !== this.props.pokemon) {
//       this.pegaPokemon(this.props.pokemon);
//     }
//   }

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon, props.pokeName]
  );

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}

export default PokeCard;
