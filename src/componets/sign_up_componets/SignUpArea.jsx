import React, {useState} from "react";
import Logo from "../nav_bar/Logo.jsx";
import InputArea from "../login_componets/InputArea.jsx";
import SignUpButton from "./SignUpButton.jsx";
import axios from "axios";


async function registerServerConnection (results) {
	var respontStates = {}
	await axios({
		method: "post",
		url: "http://localhost:3000/register",
		data: {
			user_name: results.user_name,
			first_name: results.first_name,
			last_name: results.last_name,
			email: results.email_input,
			password: results.password_input,
		},
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}).then((response) => {respontStates = response.data});
	return respontStates
};

function SignUpInputArea() {
	
	var [responseStates, setResponseStates] = useState("")	

	async function signUpButtonAction () {
		var inputResult = {
			user_name: document.getElementById("user_name").value,
			first_name: document.getElementById("first_name").value,
			last_name: document.getElementById("last_name").value,
			email_input: document.getElementById("email_input").value,
			password_input: document.getElementById("password_input").value,
		};
		for (var inputKey in inputResult) {
			if (inputResult[inputKey].length == 0) {
				setResponseStates(responseStates = "empty field")
				return "empty field"
			};
		};
		if (inputResult.password_input.length < 6) {
			setResponseStates(responseStates = "short password") 
		}else{
			var conection_message = await registerServerConnection(inputResult)
			setResponseStates(responseStates = conection_message.message)
			if (conection_message.message == "user register successfully") {
				location.replace("http://localhost:5173/login")
			}
		}
	};

	return (
		<div className="sign-up-input-area">
			<a href="index.html"><Logo/></a>
			<h1>Sign Up to IBStreaming</h1>
			<h3>For greate streaming experience</h3>
			<InputArea type="text" showText="User Name" id="user_name"/>
			{ responseStates == "user_name used" ? <p className="error">* user already had account try to login or change the name</p> : null }
			<InputArea type="text" showText="First Name" id="first_name"/>
			<InputArea type="text" showText="last Name" id="last_name"/>
			<InputArea type="email" showText="example@gmail.com" id="email_input"/>
			<InputArea type="password" showText="password" id="password_input"/>
			{ responseStates == "short password" ? <p className="error">* Password should be more than 7 char</p> : null}
			{ responseStates == "empty field" ? <p className="error">* All field are required</p> : null}
			<SignUpButton myFunc={signUpButtonAction} />
		</div>
	)
};

export default SignUpInputArea;



