import React from "react";
// import "../src/styles/index.css";

const Light = ({ color, lit, setLit, css, setCss }) => {
	// const css = `boxShadow: "0px 1px 19px 10px rgb(236, 231, 174)"`
	return (
		<div>
			<div
				onClick={() => setLit(color)}
				className={
					"lights " + color + (color === lit ? " selected" : "")
				}></div>
		</div>
	);
};

export default Light;
