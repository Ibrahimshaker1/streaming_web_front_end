import React, {useState} from "react";
import InputArea from "../login_componets/InputArea.jsx"; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogOutButton from "./LogOutButton.jsx";
import axios from "axios";
const userData = {
	"User Name": localStorage.getItem("userName"),
	"First Name": localStorage.getItem("firstName"),
	"Last Name": localStorage.getItem("lastName"),
	"Email": localStorage.getItem("email")
}

async function serverLogOut () {
	const userId = localStorage.getItem("id");
	var apiLogOutStates = "";
	await axios({
		method: "get",
		url: `http://localhost:3000/logout/${userId}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}).then(function (response) {
		apiLogOutStates = response.data
	})	
	return apiLogOutStates
}


function AccountApp () {
	
	var [updateStates, setUpdateStates] = useState("")	 

	async function updateApiConnection(data) {
		// var myResponseMassage = "";
		await axios({
			method: "POST",
			url: "http://localhost:3000/userUpdate",
			data: {
				newUserName: data.newUserName,
				newFirstName: data.newFisrtName,
				newLastName: data.newLastName,
				userId: data.userId
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(function (response) {
			// myResponseMassage = response.data.message;
			setUpdateStates(updateStates = response.data.message)
		})
	}

	async function saveButtonClick() {
		const newData =  {
			newUserName: document.getElementById("user_name").value,
			newFisrtName: document.getElementById("first_name").value,
			newLastName: document.getElementById("last_name").value,
			userId: localStorage.getItem("id")
		};
		await updateApiConnection(newData)
		if (updateStates == "update done") {
			localStorage.setItem("userName", newData.newUserName)
			localStorage.setItem("firstName", newData.newFisrtName)
			localStorage.setItem("lastName", newData.newLastName)
			location.replace("http://localhost:5173")
		}
	};

	async function logOutButtonFun () {
		localStorage.removeItem("userName");
		localStorage.removeItem("firstName");
		localStorage.removeItem("lastName");
		localStorage.removeItem("email");
		document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	    const apiStates = await serverLogOut();
		if (apiStates === "OK") {
			localStorage.removeItem("id");
			location.replace("http://localhost:5173");
		};
	};		
	
	return (
		<div className="account-content">
			<AccountCircleIcon sx={{"color": "white", "height": "80px", "width": "80px"}}/>	
			<h2>My Account</h2>
			<p>User Name</p>
			<InputArea type="text" showText={userData["User Name"]} id="user_name"/>
			{ (updateStates == "This user_name is used") ? <p className="error">This user_name is used</p> : null}
			<p>First Name</p>
			<InputArea type="text" showText={userData["First Name"]} id="first_name"/>
			<p>Last Name</p>
			<InputArea type="text" showText={userData["Last Name"]} id="last_name"/>
			<p>Email</p>
			<input type="text" placeholder={userData["Email"]} id="email" className="login-input" readOnly/>
			<button className="submit_button" onClick={ () => {saveButtonClick()}}>Save Changes</button>
			<button className="submit_button" onClick={ () => {
				location.replace("http://localhost:5173/")
			}}><ArrowBackIcon /><p className="p_back" >Go Back</p></button>
			<LogOutButton logOutFunc={logOutButtonFun}/>
		</div>
	)
}

export default AccountApp



