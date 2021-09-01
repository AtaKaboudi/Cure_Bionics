import React from "react";
import "./company.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublishIcon from "@material-ui/icons/Publish";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

export default function Company() {
	return (
		<div className="company">
			<Topbar />
			<div className="section">
				<Sidebar />
				<div className="mainPannelContainer">
					<div className="companyTitleContainer">
						<h1 className="companyTitle">
							Edit Company Representative Details
						</h1>
					</div>
					<div className="companyContainer">
						<div className="companyShow">
							<div className="companyShowTop">
								<img
									src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
									alt=""
									className="companyShowImg"
								/>
								<div className="companyShowTopTitle">
									<span className="companyShowCompanyName">Foulen</span>
									<span className="companyShowCompanyTitle">Tunis</span>
								</div>
							</div>
							<div className="companyShowBottom">
								<span className="companyShowTitle">Details</span>
								<div className="companyShowInfo">
									<PermIdentityIcon className="companyShowIcon" />
									<span className="companyShowInfoTitle">Foulen</span>
								</div>
								<div className="companyShowInfo">
									<PhoneIcon className="companyShowIcon" />
									<span className="companyShowInfoTitle">+21622222</span>
								</div>
								<div className="companyShowInfo">
									<EmailIcon className="companyShowIcon" />
									<span className="companyShowInfoTitle">
										flenbenfoulen@gmail.com
									</span>
								</div>

								<div className="companyShowInfo">
									<LocationOnIcon className="companyShowIcon" />
									<span className="companyShowInfoTitle">Tunisia</span>
								</div>
							</div>
						</div>
						<div className="companyUpdate">
							<span className="companyUpdateTitle">Edit</span>
							<form className="companyUpdateForm">
								<div className="companyUpdateItem">
									<label>First Name</label>
									<input
										type="text"
										placeholder="First Name"
										className="companyUpdateInput"
									/>
								</div>
								<div className="companyUpdateItem">
									<label>Phone number</label>
									<input
										type="text"
										placeholder="+123456789"
										className="companyUpdateInput"
									/>
								</div>
								<div className="companyUpdateItem">
									<label>City</label>
									<input
										type="text"
										placeholder="City"
										className="companyUpdateInput"
									/>
								</div>
								<div className="companyUpdateItem">
									<label>Postcode</label>
									<input
										type="text"
										placeholder="31005"
										className="companyUpdateInput"
									/>
								</div>
							</form>
							<div className="companyFormRight">
								<form className="companyUpdateForm">
									<div className="companyUpdateItem">
										<label>Last Name</label>
										<input
											type="text"
											placeholder="Last Name"
											className="companyUpdateInput"
										/>
									</div>
									<div className="companyUpdateItem">
										<label>Email Adress</label>
										<input
											type="email"
											placeholder="example@email.com"
											className="companyUpdateInput"
										/>
									</div>
									<div className="companyUpdateItem">
										<label>State/County</label>
										<input
											type="text"
											placeholder="State/County"
											className="companyUpdateInput"
										/>
									</div>
									<div className="companyUpdateItem">
										<label>Country</label>
										<input
											type="text"
											placeholder="Country"
											className="companyUpdateInput"
										/>
									</div>
								</form>
							</div>
							<div className="companyUpdateUpload">
								<img
									className="companyUpdateImg"
									src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
									alt=""
								/>
								<input type="file" id="file" style={{ display: "none" }} />

								<button className="companyUpdateButton">
									<label htmlFor="file">
										<PublishIcon className="companyUpdateIcon" />
									</label>
									Update
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
