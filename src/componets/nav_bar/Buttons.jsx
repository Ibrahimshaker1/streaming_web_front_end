import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavBarLoginButton () {
	return (
		<a href="http://localhost:5173/login.html"><button className="nav_login_bt">Log In</button></a>
	)
}

function NavBarUserName () {
	const userName = localStorage.getItem("userName")
	return (
		<div className="user_name_div">
			<p>{userName}</p>
			<div className="user_icon_div"><a href="http://localhost:5173/accout_page"><AccountCircleIcon sx={{color: "white", float: "right", width: "35px", height: "35px"}}/></a></div>
		</div>
	)
}



export {NavBarLoginButton, NavBarUserName}



