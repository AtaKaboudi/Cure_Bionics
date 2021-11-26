import React, { useRef, useState } from "react";
import "./newPatient.scss";
import Topbar from "../../admin/topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Cad from "../cad/cad";
import axios from "axios";
import { uploadCloud } from "../firebase/firebase.js";
import Coin from "react-cssfx-loading/lib/Coin";

export default function NewPatient() {
	let [scanCloudURL, setScanCloudURL] = useState("");
	let [toggle_Cad, setToggle_Cad] = useState(false);
	let [displayLoader, setDisplayLoader] = useState(false);
	let [input, setInput] = useState({
		first_name: "First Name",
		last_name: "Last Name",
		email: "Email",
		phone_number: "Phone_Number",
		address: "Address",
		gender: "Gender",
		amputation_level: "Amputation Level",
		left_right: "Arm",
		status: 0,
		photoFile: {},
		scanFile: {},
		limb_photoFile: {},
	});

	async function handleFormSubmition() {
		//VALIDATION
		/*
		if (
			!input.scanFile ||
			!input.limb_photoFile ||
			!input.photoFile ||
			input.first_name === "First Name" ||
			input.first_name === "" ||
			input.last_name === "Last Name" ||
			input.last_name === "" ||
			input.email === "Email" ||
			input.email === ""
		)
			return alert("missing fields");
			*/

		//Display Loder
		setDisplayLoader(true);

		// CLOUD UPLOAD
		/*
		uploadCloud(input.scanFile, "SCAN", (scanURL) => {
			setScanCloudURL(scanURL);
			uploadCloud(input.limb_photoFile, "LIMB", (limbURL) => {
				uploadCloud(input.photoFile, "PHOTO", (photoURL) => {
					// REQ BODY FORMATTING
					input["scan_url"] = scanURL;
					input["limb_photo_url"] = limbURL;
					input["photo_url"] = photoURL;
					input["partner_id"] = localStorage.getItem("partner_id");

					delete input.scanFile;
					delete input.limb_photoFile;
					delete input.photoFile;
					
					axios
						.post("http://localhost:8080/patient/", input, {
							headers: {
								"Content-Type": "application/json",
							},
						})
						.then((res) => {
							console.log("[NEW PATIENT] Successfull Registration");
							setDisplayLoader(false);
							setToggle_Cad(true);
						})
						.catch((err) => {
							alert(err);
						});
						
				});
			});
		});
		*/
	}
	return (
		<div className="newPatient">
			<Topbar />
			<div className="section">
				<Sidebar />
				<div className="mainPannelContainer">
					<h1 className="newPatientTitle">New Patient</h1>
					<form
						className="newPatientForm"
						method="post"
						encType="multipart/form-data">
						<div className="newPatientItem">
							<label>First Name</label>
							<input
								onClick={() => setInput({ ...input, first_name: "" })}
								onChange={(e) =>
									setInput({ ...input, first_name: e.target.value })
								}
								type="text"
								placeholder={input.first_name}
							/>
						</div>
						<div className="newPatientItem">
							<label>Last Name</label>
							<input
								onClick={() => setInput({ ...input, last_name: "" })}
								onChange={(e) =>
									setInput({ ...input, last_name: e.target.value })
								}
								type="text"
								placeholder={input.last_name}
							/>
						</div>
						<div className="newPatientItem">
							<label>Email</label>
							<input
								onClick={() => setInput({ ...input, email: "" })}
								onChange={(e) => setInput({ ...input, email: e.target.value })}
								type="email"
								placeholder={input.email}
							/>
						</div>
						<div className="newPatientItem">
							<label>Phone Number</label>
							<input
								onClick={() => setInput({ ...input, phone_number: "" })}
								onChange={(e) =>
									setInput({ ...input, phone_number: e.target.value })
								}
								type="text"
								placeholder={input.phone_number}
							/>
						</div>
						<div className="newPatientItem">
							<label>Address</label>
							<input
								onClick={() => setInput({ ...input, address: "" })}
								onChange={(e) =>
									setInput({ ...input, address: e.target.value })
								}
								type="text"
								placeholder={input.address}
							/>
						</div>
						<div className="newPatientItem">
							<label>Gender</label>
							<div className="newPatientGender">
								<input
									type="radio"
									name="gender"
									id="male"
									value="male"
									onClick={() => setInput({ ...input, gender: "Male" })}
								/>
								<label htmlFor="male">Male</label>
								<input
									type="radio"
									name="gender"
									id="female"
									value="female"
									onClick={() => setInput({ ...input, gender: "Female" })}
								/>
								<label htmlFor="female">Female</label>
							</div>
						</div>
						<div className="newPatientItem">
							<label>Amputation level</label>
							<select
								className="newPatientSelect"
								name="amputationlevel"
								id="active"
								onChange={(e) =>
									setInput({ ...input, amputation_level: e.target.value })
								}>
								<option value="forequarter">Forequarter</option>
								<option value="transhumeral">Shoulder disarticulation</option>
								<option value="transradial">Above Elbow</option>
								<option value="transradial">Below Elbow</option>
								<option value="transradial">Wrist disarticulation</option>
								<option value="transradial">Hip disarticulation</option>
								<option value="transradial">Above Knee(Trans-femoral)</option>
								<option value="transradial">Knee disarticulation</option>
								<option value="transradial">Below the knee(Transtibial)</option>
								<option value="transradial">Foot amputation</option>
							</select>
						</div>

						<div className="newPatientItem">
							<label>Arm</label>
							<select
								className="newPatientSelect"
								name="arm"
								id="active"
								onChange={(e) => {
									setInput({ ...input, left_right: e.target.value });
								}}>
								<option value="right">Right</option>
								<option value="left">Left</option>
							</select>
						</div>
						<div className="newPatientItem">
							<label>Patient Photo</label>
							<input
								type="file"
								placeholder=""
								onChange={(e) =>
									setInput({ ...input, photoFile: e.target.files[0] })
								}
							/>
						</div>
						<div className="newPatientItem">
							<label>Residual limb photo</label>
							<input
								type="file"
								placeholder=""
								onChange={(e) =>
									setInput({ ...input, limb_photoFile: e.target.files[0] })
								}
							/>
						</div>
						<div className="newPatientItem">
							<label>3D Scan</label>
							<input
								type="file"
								onChange={(e) => {
									setInput({ ...input, scanFile: e.target.files[0] });
								}}
							/>
						</div>
						<button
							className="newPatientButton"
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								handleFormSubmition();
								setToggle_Cad(true);
							}}>
							Create
						</button>
						{displayLoader ? (
							<div id="loaderContainer">
								<Coin width="10px" height="10px" />
							</div>
						) : (
							""
						)}
					</form>
				</div>
			</div>

			{toggle_Cad ? <Cad file={scanCloudURL} /> : ""}
		</div>
	);
}
