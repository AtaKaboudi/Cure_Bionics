import React, { useRef, useState } from "react";
import "./newPatient.scss";
import Topbar from "../../admin/topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Cad from "../cad/cad";
import axios from "axios";

export default function NewPatient() {
	let [input, setInput] = useState({
		first_name: "First Name",
		last_name: "Last Name",
		email: "Email",
		phone_number: "Phone_Number",
		address: "Address",
		gender: "Gender",
		amputation_level: "Amputation Level",
		left_right: "Arm",
		scan: {},
		limb_photo: {},
	});
	let [toggle_Cad, setToggle_Cad] = useState(false);
	function handleFormSubmition() {
		setInput({ ...input, partner_id: localStorage.getItem("partner_id") });
		let formData = new FormData();
		for (var key in input) {
			formData.append(key, input[key]);
		}

		axios
			.post("http://localhost:8080/patient/", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log("[NEW PATIENT] Successfull Registration");
			})
			.catch((err) => {
				alert(err);
			});
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
						enctype="multipart/form-data">
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
								<option value="transhumeral">Transhumeral</option>
								<option value="transradial">Transradial</option>
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
							<label>Residual limb photo</label>
							<input
								type="file"
								placeholder=""
								onChange={(e) =>
									setInput({ ...input, limb_photo: e.target.files[0] })
								}
							/>
						</div>
						<div className="newPatientItem">
							<label>3D Scan</label>
							<input
								type="file"
								onChange={(e) =>
									setInput({ ...input, scan: e.target.files[0] })
								}
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
					</form>
				</div>
			</div>

			{toggle_Cad ? <Cad file={input.scan} /> : ""}
		</div>
	);
}
