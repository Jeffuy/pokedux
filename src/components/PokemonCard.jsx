import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

const PokemonCard = ({ name, image }) => {
	return (
		<Card
			title={name}
			cover={
				<img
					alt={name}
					src={image}
				/>
			}
			extra={<StarOutlined />}
		>
			<Meta description="normal, pink" />
		</Card>
	);
};

export default PokemonCard;
