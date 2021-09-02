import React from "react";
import "./newPatient.scss";
import Topbar from "../../admin/topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";

export default function NewPatient() {
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
							<input type="text" placeholder="foulen" />
						</div>
						<div className="newPatientItem">
							<label>Full Name</label>
							<input type="text" placeholder="foulen ben foulen" />
						</div>
						<div className="newPatientItem">
							<label>Email</label>
							<input type="email" placeholder="foulen@gmail.com" />
						</div>
						<div className="newPatientItem">
							<label>Phone Number</label>
							<input type="text" placeholder="+216222" />
						</div>
						<div className="newPatientItem">
							<label>Address</label>
							<input type="text" placeholder="Tunisia" />
						</div>
						<div className="newPatientItem">
							<label>Gender</label>
							<div className="newPatientGender">
								<input type="radio" name="gender" id="male" value="male" />
								<label for="male">Male</label>
								<input type="radio" name="gender" id="female" value="female" />
								<label for="female">Female</label>
							</div>
						</div>
						<div className="newPatientItem">
							<label>Amputation level</label>
							<select
								className="newPatientSelect"
								name="amputationlevel"
								id="active">
								<option value="forequarter">Forequarter</option>
								<option value="transhumeral">Transhumeral</option>
								<option value="transradial">Transradial</option>
							</select>
						</div>

						<div className="newPatientItem">
							<label>Arm</label>
							<select className="newPatientSelect" name="arm" id="active">
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
							<input type="file" placeholder="" />
						</div>
						<button className="newPatientButton">Create</button>
					</form>
				</div>
			</div>
		</div>
	);
}
