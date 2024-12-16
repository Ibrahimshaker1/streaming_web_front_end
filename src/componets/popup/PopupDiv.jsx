import React, {useState} from "react";
import {NavBarLoginButton} from "../nav_bar/Buttons.jsx"
import Logo from "../nav_bar/Logo.jsx"

function LogInPopUp () {
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
				<p className="popup-text">You can upload any video</p>
				<p className="popup-text">you waint and whitch it with</p>
				<p className="popup-text">friends in rooms ;-)</p>
				<NavBarLoginButton />
		</div>
		</div>
	)
}

export default LogInPopUp

