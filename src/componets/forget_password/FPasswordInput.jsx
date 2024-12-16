import React, {useState} from "react";
import axios from "axios";
import InputArea from "../login_componets/InputArea.jsx"; 
import FPasswordButton from "./FPasswordButton.jsx";
import LockOpenIcon from '@mui/icons-material/LockOpen';

async function serverFPassConnection (results) {
	console.log("connect")
};



function ForgetPasswordInput () {
	var [fPassState, setFPassState] = useState("");

	function fPassButton () {
		console.log("cliked");
	}

	return (
		<div className="forget-input-area">
			<LockOpenIcon sx={{fontSize: 70, color: "white"}}/>
			<h1>Send My Password</h1>
			<p className="area-message">Enter you User Name And your Email Address and you will receive your old password in the email</p>
			<InputArea type="text" showText="User Name" id="user_name"/>
			<InputArea type="email" showText="example@gmail.com" id="user_email"/>
			<FPasswordButton myFunc={fPassButton} />
			<p className="area-bottom-message">You don’t have an account? <a href="sign_up.html">Sign Up</a></p>
		</div>
	)	
};

export default ForgetPasswordInput;


