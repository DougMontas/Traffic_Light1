import React, { useState } from "react";
import Light from "./Light.js";

//create your first component
const Home = () => {
	// const _boxShadow = () => {
	// boxShadow: "0px 1px 19px 10px rgb(236, 231, 174)";
	// };
	const colors = ["red", "yellow", "green"];
	// const boxShadow = `style={{box-shadow: "0px 1px 19px 10px rgb(236, 231, 174)"}}`
	const [lit, setLit] = useState("red");
	// const [css, setCss] = useState(false);

	return (
		<div className="Home">
			{colors.map((color) => {
				return (
					<Light
						color={color}
						lit={lit}
						setLit={setLit}
						// css={css}
						// setCss={setCss}
					/>
				);
			})}
		</div>
	);
};

export default Home;
