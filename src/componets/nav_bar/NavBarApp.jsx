import React from "react";
import Logo from "./Logo";
import {NavBarLoginButton, NavBarUserName} from "./Buttons";

function isAuthenticated() {
	if (document.cookie) {
		return true
	}else{
		return false
	};
}

function NavBarApp (props) {
	
	return (
		<div className = {props.myClass}>
			<Logo />
			{ isAuthenticated() ? <NavBarUserName /> : <NavBarLoginButton loginStyle="nav_login_bt"/> }
		</div>
	);

};


export default NavBarApp


