import React from "react";
import {createRoot} from "react-dom/client";
import AccountApp from "./componets/account_page/AccountApp.jsx"


const root = createRoot(document.getElementById("account-page-root"))
root.render(
	<div className="account-main-div">
		<AccountApp/>
	</div>
)


