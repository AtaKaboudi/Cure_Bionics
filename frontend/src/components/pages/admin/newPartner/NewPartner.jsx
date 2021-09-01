import React from "react";
import "./newPartner.scss";
import PublishIcon from "@material-ui/icons/Publish";
import Topbar from "../../admin/topbar/Topbar";
import AdminSidebar from "../../admin/adminSidebar/AdminSidebar";

export default function NewPartner() {
	return (
		<div className="partner">
			<Topbar />
			<div className="sectionContainer">
				<AdminSidebar />
				<div className="mainPannelContainer">
					<div className="partnerUpdate">
						<span className="partnerUpdateTitle">New Partner</span>
						<form className="partnerUpdateForm">
							<div className="partnerUpdateItem">
								<label>First Name</label>
								<input
									type="text"
									placeholder="First Name"
									className="partnerUpdateInput"
								/>
							</div>
							<div className="partnerUpdateItem">
								<label>Phone number</label>
								<input
									type="text"
									placeholder="+123456789"
									className="partnerUpdateInput"
								/>
							</div>
							<div className="partnerUpdateItem">
								<label>City</label>
								<input
									type="text"
									placeholder="City"
									className="partnerUpdateInput"
								/>
							</div>
							<div className="partnerUpdateItem">
								<label>Postcode</label>
								<input
									type="text"
									placeholder="31005"
									className="partnerUpdateInput"
								/>
							</div>
						</form>
						<div className="partnerFormRight">
							<form className="partnerUpdateForm">
								<div className="partnerUpdateItem">
									<label>Last Name</label>
									<input
										type="text"
										placeholder="Last Name"
										className="partnerUpdateInput"
									/>
								</div>
								<div className="partnerUpdateItem">
									<label>Email Adress</label>
									<input
										type="email"
										placeholder="example@email.com"
										className="partnerUpdateInput"
									/>
								</div>
								<div className="partnerUpdateItem">
									<label>State/County</label>
									<input
										type="text"
										placeholder="State/County"
										className="partnerUpdateInput"
									/>
								</div>
								<div className="partnerUpdateItem">
									<label>Country</label>
									<input
										type="text"
										placeholder="Country"
										className="partnerUpdateInput"
									/>
								</div>
							</form>
						</div>
						<div className="partnerUpdateUpload">
							<img
								className="partnerUpdateImg"
								src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
								alt=""
							/>
							<input type="file" id="file" style={{ display: "none" }} />

							<button className="partnerUpdateButton">
								<label htmlFor="file">
									<PublishIcon className="partnerUpdateIcon" />
								</label>
								Upload
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
