import React from "react";
import { createRoot } from "react-dom/client";
import FormApp from "./componets/upload_page/UploadApp";

const root = createRoot(document.getElementById("upload-root"))

root.render(
	<div>
		<FormApp />
	</div>
)




