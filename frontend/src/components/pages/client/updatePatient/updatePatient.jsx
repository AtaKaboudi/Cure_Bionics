import React from "react";
import "./updatePatient.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublishIcon from "@material-ui/icons/Publish";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";

export default function UpdatePatient() {
	return (
		<div className="patient">
			<Topbar />
			<div className="mainSection">
				<Sidebar />
				<div className="mainPannelContainer">
					<div className="patientTitleContainer">
						<h1 className="patientTitle">Edit Patient</h1>

						<button className="patientAddButton">Create</button>
					</div>
					<div className="patientContainer">
						<div className="patientShow">
							<div className="patientShowTop">
								<img
									src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
									alt=""
									className="patientShowImg"
								/>
								<div className="patientShowTopTitle">
									<span className="patientShowPatientname">Foulen</span>
									<span className="patientShowPatientTitle">Tunis</span>
								</div>
							</div>
							<div className="patientShowBottom">
								<span className="patientShowTitle">Details</span>
								<div className="patientShowInfo">
									<PermIdentityIcon className="patientShowIcon" />
									<span className="patientShowInfoTitle">Foulen</span>
								</div>
								<div className="patientShowInfo">
									<PhoneIcon className="patientShowIcon" />
									<span className="patientShowInfoTitle">+21622222</span>
								</div>
								<div className="patientShowInfo">
									<EmailIcon className="patientShowIcon" />
									<span className="patientShowInfoTitle">
										flenbenfoulen@gmail.com
									</span>
								</div>

								<div className="patientShowInfo">
									<LocationOnIcon className="patientShowIcon" />
									<span className="patientShowInfoTitle">Tunisia</span>
								</div>
							</div>
						</div>
						<div className="patientUpdate">
							<span className="patientUpdateTitle">Edit</span>
							<form className="patientUpdateForm">
								<div className="patientUpdateLeft">
									<div className="patientUpdateItem">
										<label>Patient name</label>
										<input
											type="text"
											placeholder="Foulen"
											className="patientUpdateInput"
										/>
									</div>
									<div className="patientUpdateItem">
										<label>Phone number</label>
										<input
											type="text"
											placeholder="+21622222"
											className="patientUpdateInput"
										/>
									</div>
									<div className="patientUpdateItem">
										<label>Email</label>
										<input
											type="text"
											placeholder="flenbenfoulen@gmail.com"
											className="patientUpdateInput"
										/>
									</div>
									<div className="patientUpdateItem">
										<label>Address</label>
										<input
											type="text"
											placeholder="Tunisia"
											className="patientUpdateInput"
										/>
									</div>
								</div>
								<div className="patientUpdateRight">
									<div className="patientUpdateUpload">
										<img
											className="patientUpdateImg"
											src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
											alt=""
										/>
										<label htmlFor="file">
											<PublishIcon className="patientUpdateIcon" />
										</label>
										<input type="file" id="file" style={{ display: "none" }} />
									</div>
									<button className="patientUpdateButton">Update</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
