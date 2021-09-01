import React from "react";

import TopBar from "../topbar/Topbar";
import SideBar from "../sidebar/Sidebar";

import "./home.scss";
import { Link } from "react-router-dom";
import PublishIcon from "@material-ui/icons/Publish";

export default function FeaturedInfo() {
	return (
		<div className="home">
			<TopBar />
			<div className="featured">
				<SideBar />
				<div className="dashboardContainer">
					<div className="patientOverview">
						<div className="featuredItem">
							<span className="featuredTitle">Total patients</span>
							<div className="featurePatientContainer">
								<span className="featuredPatient">50</span>
							</div>
						</div>

						<div className="featuredItem">
							<span className="featuredTitle">Patients waiting</span>
							<div className="featurePatientContainer">
								<span className="featuredPatient">25</span>
							</div>
						</div>

						<div className="featuredItem">
							<span className="featuredTitle">Patients fitted</span>
							<div className="featurePatientContainer">
								<span className="featuredPatient">25</span>
							</div>
						</div>
					</div>

					<h1>Upcoming Appointments</h1>
					<div className="patientList">
						<div className="featuredPatientCard">
							<img
								className="patientShowImg"
								src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
								alt=""
							/>
							<span className="featuredName">Foulen</span>
							<div className="featureAppointmentContainer">
								<span className="featuredAppointment">9.30 AM</span>
							</div>
							<Link to="/partner/updatePatient" className="updateButton">
								<button className="patientUpdateButton">
									<PublishIcon className="patientUpdateIcon" />
									Update
								</button>
							</Link>
						</div>
						<div className="featuredPatientCard">
							<img
								className="patientShowImg"
								src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
								alt=""
							/>
							<span className="featuredName">Foulen</span>
							<div className="featureAppointmentContainer">
								<span className="featuredAppointment">10.30 AM</span>
							</div>
							<Link to="/partner/updatePatient" className="updateButton">
								<button className="patientUpdateButton">
									<PublishIcon className="patientUpdateIcon" />
									Update
								</button>
							</Link>
						</div>
						<div className="featuredPatientCard">
							<img
								className="patientShowImg"
								src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
								alt=""
							/>
							<span className="featuredName">Foulen</span>
							<div className="featureAppointmentContainer">
								<span className="featuredAppointment">11.30 AM</span>
							</div>
							<Link to="/partner/updatePatient" className="updateButton">
								<button className="patientUpdateButton">
									<PublishIcon className="patientUpdateIcon" />
									Update
								</button>
							</Link>
						</div>
						<div className="featuredPatientCard">
							<img
								className="patientShowImg"
								src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
								alt=""
							/>
							<span className="featuredName">Foulen</span>
							<div className="featureAppointmentContainer">
								<span className="featuredAppointment">12.30 AM</span>
							</div>
							<Link to="/partner/updatePatient" className="updateButton">
								<button className="patientUpdateButton">
									<PublishIcon className="patientUpdateIcon" />
									Update
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
