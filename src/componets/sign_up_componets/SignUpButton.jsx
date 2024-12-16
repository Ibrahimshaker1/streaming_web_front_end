import React from "react";

function SignUpButton (props) {
	
	return (
		<button className="sign-up-button" onClick={ () => { props.myFunc() } }>Sign Up</button>	
	)
}
export default SignUpButton;

