import React from "react";

function LogOutButton (props) {
	return (<button className="log-out-button" onClick={ async () => {
		await props.logOutFunc()
	} }>Log Out</button>)
}

export default LogOutButton


