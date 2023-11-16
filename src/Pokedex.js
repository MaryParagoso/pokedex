/*Pokedex.js*/
import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemon, isWinner, playerName }) => {
  //defining components
  const playerClassName = isWinner ? 'pokedex winner' : 'pokedex';
  const totalExp = pokemon.reduce((total, p) => total + p.base_experience, 0);

  return (
    <div className={playerClassName}>
      <div className='totalEXP'><h2>{playerName}</h2>EXP: {totalExp}</div>
      <div className="pokegame-grid">
        {pokemon.map((p) => (
          <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;