import React from "react";
import { createRoot } from "react-dom/client";
import SignUpApp from "./componets/sign_up_componets/SignUpApp"

const root = createRoot(document.getElementById("sign_up_root"));
root.render(
	<div>
		<SignUpApp/>
	</div>
)
