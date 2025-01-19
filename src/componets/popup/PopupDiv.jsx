import React, {useState} from "react";
import {NavBarLoginButton} from "../nav_bar/Buttons.jsx"
import Logo from "../nav_bar/Logo.jsx"

function LogInPopUp (props) {
	var [popupActive, setPopupActive] = useState(true);
	
	function closeButton () {
		setPopupActive(popupActive = false)
	};

	return (
		<div className={ popupActive ? "popup-div" : "popup-div-close" }>
			<div className="popup-content">
				<div className="close-btn" onClick={ () => {closeButton()} }>&times;</div>
				<Logo/>
				<h1>Welcome to IBStreaming</h1>
				<p className="popup-text">{props.data.lineOne}</p>
				<p className="popup-text">{props.data.lineTwo}</p>
				<p className="popup-text">{props.data.lineThree}</p>
				{props.data.loginButton == "active" ? <NavBarLoginButton /> : 
				<button className="ok-button" onClick={
					() => {
						location.replace("http://localhost:5173");
					}
				}>Ok</button>}
			</div>
		</div>
	)
}

export default LogInPopUp

