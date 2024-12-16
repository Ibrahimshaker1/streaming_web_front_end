import React from "react";

function FPasswordButton (props) {
	return (
		<button className="forget-pass-button" onClick={ () => { props.myFunc() } }>Submit</button>		
	)
}

export default FPasswordButton;


