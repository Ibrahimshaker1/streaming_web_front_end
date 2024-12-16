import React, {useState} from "react";
import InputArea from "../login_componets/InputArea";
import UploadButton from "./UploadButton";
import UploadIcon from '@mui/icons-material/Upload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SubmitButton from "./SubmitButton";
import axios from "axios";

async function uploadToServer (uploadData) {
	let bodyFormData = new FormData();
	bodyFormData.append("name", uploadData.name)
	bodyFormData.append("categore", uploadData.categore)
	bodyFormData.append("file", uploadData.file)
	await axios({
	  method: "post",
	  url: "http://localhost:3000/uploadVideo",
	  data: bodyFormData,
	  headers: { "Content-Type": "multipart/form-data" },
	})
}


function FormPage () {

	var [inputState, setInputState] = useState("clean");
	
	async function takeFormData () {
		let videoName = document.getElementById("video_name_input").value;
		let videoCategore = document.getElementById("Video_categor_input").value;
		let videoData = document.getElementById("upload_file").files[0];
		if (videoName.length > 50) {
			setInputState(inputState = "name error");
		}else if (videoCategore.length > 50) {
			setInputState(inputState = "categore error");
		};
		let videoType = videoData.type;
		if (videoType != "video/mp4") {
			setInputState(inputState = "type error");
		};
		if (videoName.length < 50 && videoCategore.length < 50 && videoType == "video/mp4") {
			setInputState(inputState = "clean");
		};
		return {
			name: videoName,
			categore: videoCategore,
			file: videoData
		}
	}

	return (
		<div className="from_page">
			<div className="color_div">
				
			</div>
			<div className="form_div_contaner">
				<form action="" id="upload_form" onSubmit={ async (event) => {
					event.preventDefault();
					const formData = await takeFormData();
					if (inputState == "clean") {
						await uploadToServer(formData);
					};
				}} >
					<div className="from_div">
						<UploadIcon sx={{ fontSize: 70, color: "white"}}/>
						<h1>Upload Your Video</h1>
						<InputArea type="text" showText="Video Name" id="video_name_input"/>
						{ inputState == "name error" ? <p className="error" >The name is too long</p> : null }
						<InputArea type="text" showText="Categore" id="Video_categor_input" />
						{ inputState == "categore error" ? <p className="error">The categore name is too long</p> : null}
						<div className="upload_button_cont">
							<UploadButton />
						</div>
						{ inputState == "type error" ? <p className="error">The upload file must be .mp4</p> : null }
						<SubmitButton />
						<button className="submit_button" onClick={ () => {
							location.replace("http://localhost:5173/")
						} }><ArrowBackIcon /><p className="p_back" >Go Back</p></button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormPage;



