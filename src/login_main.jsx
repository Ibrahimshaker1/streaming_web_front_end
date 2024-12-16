import React from "react";
import { createRoot } from "react-dom/client";
import LoginApp from "./componets/login_componets/LoginApp";

const root = createRoot(document.getElementById("input-root"));
root.render(
	<div>
		<LoginApp />
	</div>
)


