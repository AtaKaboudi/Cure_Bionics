import react from "react";
import { Link } from "react-router-dom";
import "./patientCard.scss";
export default function PatientCard(props) {
	let params = props.params;
	return (
		<div className="featuredPatientCard">
			<img className="patientShowImg" src={params.image_url} alt="" />
			<span className="featuredName">
				{params.first_name + " " + params.last_name}
			</span>
			<div className="featureAppointmentContainer">
				<span className="featuredAppointment">9.30 AM</span>
			</div>
			<Link to="/partner/updatePatient" className="updateButton">
				<button className="patientUpdateButton">Details</button>
			</Link>
		</div>
	);
}
