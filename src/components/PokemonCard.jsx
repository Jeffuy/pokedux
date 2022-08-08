import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from '../slices/dataSlices'
 
const PokemonCard = ({ name, image, types, id }) => {
	const dispatch = useDispatch();

	const typesString = types.map(elem => elem.type.name).join(", ");

	const handleOnFavorite = () => {
		dispatch(setFavorite({pokemonID : id}));
	}


	return (
		<Card
			title={name}
			cover={
				<img
					alt={name}
					src={image}
				/>
			}
			extra={<StarButton isFavorite={true} onClick={handleOnFavorite} />}
			>
			<Meta description={typesString} />
		</Card>
	);
};

export default PokemonCard;
