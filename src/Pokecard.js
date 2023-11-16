/*Pokecard.js*/
import React from 'react';

const Pokecard = ({ id, name, type, base_experience }) => {
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId(id)}.png`;

  return (
    <div className="pokecard">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
};

const padId = (id) => {
  return id.toString().padStart(3, '0');
};

export default Pokecard;