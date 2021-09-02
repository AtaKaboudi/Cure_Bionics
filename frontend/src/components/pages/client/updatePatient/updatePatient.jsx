import React from "react";
import "./updatePatient.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

export default function UpdatePatient() {
	let [params, setParams] = useState({
		patient_id: 1,
		first_name: "ata",
		last_name: "kaboudi",
		phone_number: 290000,
		email: "ata.kaboudi@gmail.com",
		city: "Sousse",
		state: "Sousse",
		country: "Tunisia",
		postcode: 1,
		gender: "Male",
		age: 20,
		photo_url:
			"https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg",
		scan_url: "a",
		prostetic_url: "a",
		amputation_level: "Hand",
		left_right: "left",
		size_of_hand: 2,
		limb_photo_url: "a",
		partner_id: "1",
		comment_: null,
		status: null,
	});

	function changeParams(attribute) {
		setParams({ ...params, ...attribute });
	}
	let [display_edit, setDisplay_edit] = useState(1);
	return (
		<div className="patient">
			<Topbar />
			<div className="mainSection">
				<Sidebar />
				<div className="mainPannelContainer">
					<div className="patientTitleContainer">
						<h1 className="patientTitle"> Patient</h1>
					</div>
					<div className="patientContainer">
						{display_edit === 1 ? (
							<div className="patientShow">
								<div className="patientShowTop">
									<img
										src={params.photo_url}
										alt=""
										className="patientShowImg"
									/>
									<div className="patientShowTopTitle">
										<span className="patientShowPatientname">
											{params.first_name}
										</span>
										<span className="patientShowPatientTitle">
											{params.country}
										</span>
									</div>
								</div>

								<div className="patientShowBottom">
									<span className="patientShowTitle">Information</span>

									<div className="patientShowInfo">
										<PermIdentityIcon className="patientShowIcon" />
										<span className="patientShowInfoTitle">
											{params.last_name}
										</span>
									</div>
									<div className="patientShowInfo">
										<PhoneIcon className="patientShowIcon" />
										<span className="patientShowInfoTitle">
											{params.phone_number}
										</span>
									</div>
									<div className="patientShowInfo">
										<EmailIcon className="patientShowIcon" />
										<span className="patientShowInfoTitle">{params.email}</span>
									</div>

									<div className="patientShowInfo">
										<LocationOnIcon className="patientShowIcon" />
										<span className="patientShowInfoTitle">{params.state}</span>
									</div>
									<span className="patientShowTitle">Details</span>

									<div className="patientShowInfo">
										<span class="material-icons">male</span>
										<span className="patientShowInfoTitle">
											{params.gender}
										</span>
									</div>
									<div className="patientShowInfo">
										<span class="material-icons">event</span>{" "}
										<span className="patientShowInfoTitle">{params.age}</span>
									</div>
									<div className="patientShowInfo">
										<span class="material-icons">format_list_numbered</span>{" "}
										<span className="patientShowInfoTitle">
											{params.amputation_level}
										</span>
									</div>
									<div className="patientShowInfo">
										<span class="material-icons">multiple_stop</span>{" "}
										<span className="patientShowInfoTitle">
											{params.left_right}
										</span>
									</div>
									<div className="patientShowInfo">
										<span class="material-icons">front_hand</span>{" "}
										<span className="patientShowInfoTitle">
											{params.size_of_hand}
										</span>
									</div>
									<div className="patientShowInfo">
										<span className="patientShowInfoTitle">
											{params.status === 0 ? "Waiting" : "Equipped"}
										</span>
									</div>
								</div>
								<button
									className="patientEditButton"
									onClick={() => {
										setDisplay_edit(2);
									}}>
									Edit
								</button>
							</div>
						) : (
							<div className="patientUpdate">
								<span className="patientUpdateTitle">Edit</span>
								<form className="patientUpdateForm">
									<div className="patientUpdateLeft">
										<div className="patientUpdateItem">
											<label>First name</label>
											<input
												type="text"
												value={params.first_name}
												onClick={() => changeParams({ first_name: "" })}
												onChange={(e) =>
													changeParams({ first_name: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>Last name</label>
											<input
												type="text"
												value={params.last_name}
												onClick={() => changeParams({ last_name: "" })}
												onChange={(e) =>
													changeParams({ last_name: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>Phone number</label>
											<input
												type="text"
												value={params.phone_number}
												onClick={() => changeParams({ phone_number: "" })}
												onChange={(e) =>
													changeParams({ phone_number: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>Email</label>
											<input
												type="text"
												value={params.email}
												onClick={() => changeParams({ EmailIcon: "" })}
												onChange={(e) =>
													changeParams({ email: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>City</label>
											<input
												type="text"
												value={params.city}
												onClick={() => changeParams({ city: "" })}
												onChange={(e) => changeParams({ city: e.target.value })}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>Country</label>
											<input
												type="text"
												value={params.country}
												onClick={() => changeParams({ country: "" })}
												onChange={(e) =>
													changeParams({ country: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>Gender</label>
											<input
												type="text"
												value={params.gender}
												onClick={() => changeParams({ gender: "" })}
												onChange={(e) =>
													changeParams({ gender: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>Age</label>
											<input
												type="text"
												value={params.age}
												onClick={() => changeParams({ age: "" })}
												onChange={(e) => changeParams({ age: e.target.value })}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>Amputation Level</label>
											<input
												type="text"
												value={params.amputation_level}
												onClick={() => changeParams({ amputation_level: "" })}
												onChange={(e) =>
													changeParams({ amputation_level: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>Hand Size</label>
											<input
												type="text"
												value={params.size_of_hand}
												onClick={() => changeParams({ size_of_hand: "" })}
												onChange={(e) =>
													changeParams({ size_of_hand: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label> Left or right</label>
											<input
												type="text"
												value={params.left_right}
												onClick={() => changeParams({ left_right: "" })}
												onChange={(e) =>
													changeParams({ left_right: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
									</div>
									<div className="patientUpdateRight">
										<div className="patientUpdateUpload">
											<label htmlFor="file"></label>
											<input
												type="file"
												id="file"
												style={{ display: "none" }}
											/>
										</div>
										<button className="patientUpdateButton">Update</button>
									</div>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
