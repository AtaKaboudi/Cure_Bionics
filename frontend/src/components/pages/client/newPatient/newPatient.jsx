import React, { useState } from "react";
import "./newPatient.scss";
import Topbar from "../../admin/topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Cad from "../cad/cad";
export default function NewPatient() {
	let [input, setInput] = useState({
		first_name: "firstName",
		last_name: "Last Name",
		email: "Email",
		phone_number: "Phone_Number",
		address: "Address",
		gender: "Gender",
		amputation_level: "Amputation Level",
		right_left: "Arm",
	});
	let [scan, setScan] = useState();
	return (
		<div className="newPatient">
			<Topbar />
			<div className="section">
				<Sidebar />
				<div className="mainPannelContainer">
					<h1 className="newPatientTitle">New Patient</h1>
					<form className="newPatientForm">
						<div className="newPatientItem">
							<label>First Name</label>
							<input
								onClick={() => setInput({ ...input, first_name: "" })}
								onChange={(e) =>
									setInput({ ...input, firts_name: e.target.value })
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
									setInput({ ...input, right_left: e.target.value });
								}}>
								<option value="right">Right</option>
								<option value="left">Left</option>
							</select>
						</div>
						<div className="newPatientItem">
							<label>Residual limb photo</label>
							<input type="file" placeholder="" />
						</div>
						<div className="newPatientItem">
							<label>3D Scan</label>
							<input
								type="file"
								value={scan}
								onChange={(e) => console.log(e.target.files[0])}
							/>
						</div>
						<button
							className="newPatientButton"
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								console.log(input);
							}}>
							Create
						</button>
					</form>
				</div>
			</div>

			<Cad />
		</div>
	);
}
