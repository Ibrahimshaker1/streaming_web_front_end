import React from "react";
import SignUpInputArea from "./SignUpArea";

function SignUpApp () {
	return (
		<div className="sign-up-div">
			<div className="left-side-div">
				<div id="div-img-1">
					<img className="bottom-left" src="/images/black_ops_6.jpg" alt="black_ops_6_image"></img>
				</div>
				<div id="div-img-2">
					<img className="top-image" src="/images/black_myth.jpg" alt="black_myth"></img>
					<img className="bottom-image" src="/images/elden_ring.png" alt="elden_ring"></img>
				</div>
				<div id="div-img-3">
					<img className="top-image"src="/images/gad_of_war.jpg" alt="gad_of_war"></img>
					<img className="bottom-image" src="/images/gta_6.jpg" alt="gta_6"></img>
				</div>
				<div id="div-img-4">
					<img className="top-image" src="/images/valorant.jpg" alt="valorant"></img>
					<img className="bottom-image" src="/images/apx.jpg" alt="apex"></img>
				</div>
				<div id="div-img-5">
					<img className="top-right" src="/images/dark_souls.jpg" alt="dark_souls"></img>
				</div>
			</div>
			<div className="right-side-div">
				<SignUpInputArea/>
			</div>			
		</div>
	);
};

export default SignUpApp;


