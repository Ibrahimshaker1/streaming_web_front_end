import React from "react";
import {createRoot}  from "react-dom/client";
import ForgetPasswordApp from "./componets/forget_password/FPasswordApp";

const root = createRoot(document.getElementById("forget-password-root"));
root.render(
	<div>
		<ForgetPasswordApp/>
	</div>
)



