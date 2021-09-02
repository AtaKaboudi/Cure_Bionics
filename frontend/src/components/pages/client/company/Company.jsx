import React from "react";
import { useState } from "react";
import "./company.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublishIcon from "@material-ui/icons/Publish";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

export default function Company() {
	let params = {
		company_name: "cure_bionics",
		representative: "mohamed_dhaoufai",
		phone_number: "00000",
		email: "dhaoufai@gmail.com",
		address: "a",
		state: "a",
		postcode: null,
		legal_structure: null,
		country: "tunisia",
		rep_image_url:
			"https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	};
	let [input, setInput] = useState({
		representative: "Enter Represesntative",
		company_name: "Enter Company name",
		email: "Email",
		phone_number: "PhoneNumber",
		address: "address",
		state: "State",
		postcode: "PostCode",
		country: "Country",
		legal_structure: "Legal Structue",
	});

	function changeInputState(attribute, value) {
		setInput({ ...input, [attribute]: value });
	}
	function setOnClick(attribute) {
		setInput({ ...input, ...attribute });
	}
	return (
		<div className="company">
			<Topbar />
			<div className="section">
				<Sidebar />
				<div className="mainPannelContainer">
					<div className="companyTitleContainer">
						<h1 className="companyTitle">Company Settings</h1>
					</div>
					<div className="companyContainer">
						<div className="companyShow">
							<div className="companyShowTop">
								<img
									src={params.rep_image_url}
									alt=""
									className="companyShowImg"
								/>
								<div className="companyShowTopTitle">
									<span className="companyShowCompanyName">
										{params.company_name}
									</span>
									<span className="companyShowCompanyTitle">
										{params.country}
									</span>
								</div>
							</div>
							<div className="companyShowBottom">
								<span className="companyShowTitle">Details</span>
								<div className="companyShowInfo">
									<PermIdentityIcon className="companyShowIcon" />
									<span className="companyShowInfoTitle">
										{params.representative}
									</span>
								</div>
								<div className="companyShowInfo">
									<PhoneIcon className="companyShowIcon" />
									<span className="companyShowInfoTitle">
										{params.phone_number}
									</span>
								</div>
								<div className="companyShowInfo">
									<EmailIcon className="companyShowIcon" />
									<span className="companyShowInfoTitle">{params.email}</span>
								</div>

								<div className="companyShowInfo">
									<LocationOnIcon className="companyShowIcon" />
									<span className="companyShowInfoTitle">{params.country}</span>
								</div>
							</div>
						</div>

						<div className="companyUpdate">
							<span className="companyUpdateTitle">Edit</span>
							<form className="companyUpdateForm">
								<div className="companyUpdateItem">
									<label>Name</label>
									<input
										type="text"
										value={input.representative}
										onClick={() => {
											setInput({ representative: "" });
										}}
										onChange={(e) => {
											changeInputState("representative", e.target.value);
										}}
										className="companyUpdateInput"
									/>
								</div>
								<div className="companyUpdateItem">
									<label>Phone number</label>
									<input
										type="text"
										onClick={() => {
											setOnClick({ phone_number: "" });
										}}
										value={input.phone_number}
										onChange={(e) => {
											changeInputState("phone_number", e.target.value);
										}}
										className="companyUpdateInput"
									/>
								</div>
								<div className="companyUpdateItem">
									<label>State</label>
									<input
										type="text"
										value={input.state}
										onClick={() => {
											setOnClick({ state: "" });
										}}
										onChange={(e) => {
											changeInputState("state", e.target.value);
										}}
										className="companyUpdateInput"
									/>
								</div>
								<div className="companyUpdateItem">
									<label>Postcode</label>
									<input
										type="text"
										onClick={() => {
											setOnClick({ ...input, postcode: "" });
										}}
										value={input.postcode}
										onChange={(e) => {
											changeInputState("postcode", e.target.value);
										}}
										className="companyUpdateInput"
									/>
								</div>
							</form>
							<div className="companyFormRight">
								<form className="companyUpdateForm">
									<div className="companyUpdateItem">
										<label>Email Adress</label>
										<input
											type="email"
											onClick={() => {
												setOnClick({ email: "" });
											}}
											value={input.email}
											onChange={(e) => {
												changeInputState("email", e.target.value);
											}}
											className="companyUpdateInput"
										/>
									</div>
									<div className="companyUpdateItem">
										<label>Country</label>
										<input
											onClick={() => {
												setOnClick({ country: "" });
											}}
											type="text"
											value={input.country}
											onChange={(e) => {
												changeInputState("country", e.target.value);
											}}
											className="companyUpdateInput"
										/>
									</div>

									<div className="companyUpdateItem">
										<label>Legal Structure</label>
										<input
											type="text"
											onClick={() => {
												setOnClick({ legal_structure: "" });
											}}
											value={input.legal_structure}
											onChange={(e) => {
												changeInputState("legal_structure", e.target.value);
											}}
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

								<button
									className="companyUpdateButton"
									onClick={() => console.log(input)}>
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
