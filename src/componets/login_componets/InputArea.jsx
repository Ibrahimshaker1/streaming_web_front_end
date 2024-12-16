import React from "react";


function InputArea (props) {
	return (
		<input type={props.type} placeholder={props.showText} className="login-input" id={props.id}></input>
	);
};

export default InputArea;

