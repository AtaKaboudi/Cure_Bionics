import "./partnerCard.scss";
export default function PartnerCard(props) {
	let params = props.params;
	return (
		<div className="featuredPartnerCard">
			<img className="partnerShowImg" src={params.rep_image_url} alt="" />
			<h2>{params.company_name}</h2>
			<label>{params.representative}</label>
			<div className="featureAppointmentContainer"></div>
			<div className="updateButton">
				<button className="partnerUpdateButton">Details</button>
			</div>
		</div>
	);
}
