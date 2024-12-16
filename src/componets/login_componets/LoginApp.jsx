import React, {useState} from "react";
import InputArea from "./InputArea";
import LoginButton from "./LoginButton";
import LockIcon from '@mui/icons-material/Lock';
import axios from "axios";


async function serverConnection (inputResults) {
	var responseData = {}
	await axios({
		method: "post",
		url: "http://localhost:3000/login",
		data: {
			user_name: inputResults.userName,
			password: inputResults.password
		},
		headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    	}
	}).then(function (response) {
		responseData = response.data
	});
	return responseData
}; 

function LoginApp () {
	
	var [userCondition, setUserCondition] = useState("") 


	function getInputValues () {
		const userName = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		return {
			userName: userName,
			password: password
		};
	};

	async function checkUser () {
		const inputResults = getInputValues();
		const responseMassage = await serverConnection(inputResults);
		setUserCondition(userCondition = responseMassage.message);
		if (userCondition == "login successfully") {
			localStorage.setItem("userName", responseMassage.userdata.user_name)
			localStorage.setItem("id", responseMassage.userdata.id)
			localStorage.setItem("firstName", responseMassage.userdata.first_name)
			localStorage.setItem("lastName", responseMassage.userdata.last_name)
			localStorage.setItem("email", responseMassage.userdata.email)
			document.cookie = 'session_id=' + responseMassage.session_data.session_id + ';expires=' + new Date(responseMassage.session_data.expires_date).toUTCString()
			location.replace("http://localhost:5173/")
		};
	}


	return (
		<div className="containor">
			<div className="input-content">
				<div><LockIcon sx={{ fontSize: 70, color: "white"}}/></div>
				<div><h1>Log In To Your Account</h1></div>
				<div className="input-area">
					<InputArea type="text" showText="username" id="username" />
					{ userCondition == "user name dose not exist" ? <p className = "error">user name is wrong</p> : null}
					<InputArea type="password" showText="password" id="password"/>
					{ userCondition == "password is wrong" ? <p className = "error">password is wrong</p> : null }
					<LoginButton myFunc={checkUser} />
				</div>
				<div><a href="forget_password.html">Forget your password?</a></div>
				<div><p>You do not have an account? <a href="sign_up.html">Sign Up</a></p></div>
			</div>
		</div>
	)
};

export default LoginApp


