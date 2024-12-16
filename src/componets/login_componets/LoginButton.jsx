import React from "react";


function LoginButton(props) {

	function clickAction () {
		props.myFunc()
		// location.replace("http://localhost:5173/");
	}

	return (
		<button onClick={ () => {
			clickAction()
		} } className="input-button">Log In</button>
	)
}

export default LoginButton



