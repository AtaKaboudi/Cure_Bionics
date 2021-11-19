import React, { useEffect, useRef } from "react";
import "./updatePatient.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import global from "../.env.js";
import { useParams } from "react-router";
import axios from "axios";

export default function UpdatePatient(props) {
	let [params, setParams] = useState({});
	let { patient_id } = useParams();

	useEffect(() => {
		axios
			.get(global.BACKEND + "patient/id/" + patient_id)
			.then((res) => {
				console.log(res.data);
				setParams(res.data[0]);
			})
			.catch((err) => {
				alert("ERROR");
			});
	}, []);

	function changeParams(attribute) {
		setParams({ ...params, ...attribute });
	}
	let [display_edit, setDisplay_edit] = useState(1);

	function submitChanges() {
		delete params.patient_id;
		axios
			.put(global.BACKEND + "patient/" + patient_id, params)
			.then((res) => {
				window.location.reload();
			})
			.catch((err) => alert(err));
	}
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
										<EmailIcon className="patientShowIcon" />
										<span className="patientShowInfoTitle">
											{params.address}
										</span>
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
									<div className="patientShowInfo">
										<a href={params.photo_url}>Patient Image</a>
										<span class="material-icons">arrow_drop_down</span>
									</div>
									<div className="patientShowInfo">
										<a href={params.limb_photo_url}>Limb Image</a>
										<span class="material-icons">arrow_drop_down</span>
									</div>
									<div className="patientShowInfo">
										<a href={params.scan_url}>3D Scan</a>
										<span class="material-icons">arrow_drop_down</span>
									</div>
									<span className="patientShowTitle">Comments</span>
									<div className="patientShowInfo">
										<span className="patientShowInfoTitle">
											{params.comments_}
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
												onClick={() => changeParams({ email: "" })}
												onChange={(e) =>
													changeParams({ email: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem">
											<label>Address</label>
											<input
												type="text"
												value={params.address}
												onClick={() => changeParams({ address: "" })}
												onChange={(e) =>
													changeParams({ address: e.target.value })
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
										<div className="patientUpdateItem">
											<label>Status</label>
											<input
												type="text"
												value={params.status}
												onClick={() => changeParams({ status: "" })}
												onChange={(e) =>
													changeParams({ status: e.target.value })
												}
												className="patientUpdateInput"
											/>
										</div>
										<div className="patientUpdateItem_Comment">
											<label> Comments</label>
											<textarea
												type="text"
												value={params.comments_}
												onClick={() => changeParams({ comments_: "" })}
												onChange={(e) =>
													changeParams({ comments_: e.target.value })
												}
												className="patientUpdateInput_Comment"></textarea>
										</div>
									</div>
								</form>
								<button
									className="patientUpdateButton"
									onClick={() => {
										submitChanges();
									}}>
									Update
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
