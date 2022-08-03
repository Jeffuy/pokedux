import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

import React from "react";

const PokemonList = ({ pokemons }) => {
	return (
		<div className="PokemonList">
			{pokemons.map((pokemon) => {
				return <PokemonCard />;
			})}
		</div>
	);
};

PokemonList.defaultProps = {
	pokemons: Array(10).fill(''),
}

export default PokemonList;
