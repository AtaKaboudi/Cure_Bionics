import React from "react";
import "./newPartner.scss";
import PublishIcon from "@material-ui/icons/Publish";
import Topbar from "../../admin/topbar/Topbar";
import AdminSidebar from "../../admin/adminSidebar/AdminSidebar";
import { useState } from "react";
import axios from "axios";
export default function NewPartner() {
	let [newPartner, setNewPartner] = useState({
		company_name: "Company Name",
		representataive: "Representative",
		phone_number: "Phone Number",
		email: "Email",
		address: "Address",
		state: "State",
		post_code: "PostCode",
		legal_structure: "Legal Structure",
		country: "Coutnry ",
		login: "Login",
		rep_image_url: "",
	});

	function savePartner() {
		let formData = new FormData();
		for (var key in newPartner) {
			formData.append(key, newPartner[key]);
		}
		axios
			.post("http://localhost:8080/partner/", newPartner, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => console.log(res));
	}
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
								<input
									type="text"
									placeholder={newPartner.company_name}
									onClick={() => {
										setNewPartner({
											...newPartner,
											company_name: "",
										});
									}}
									onChange={(e) => {
										setNewPartner({
											...newPartner,
											company_name: e.target.value,
										});
									}}
									className="partnerUpdateInput"
								/>
							</div>
							<div className="partnerUpdateItem">
								<input
									type="text"
									placeholder={newPartner.phone_number}
									onClick={() => {
										setNewPartner({
											...newPartner,
											phone_number: "",
										});
									}}
									onChange={(e) => {
										setNewPartner({
											...newPartner,
											phone_number: e.target.value,
										});
									}}
									className="partnerUpdateInput"
								/>
							</div>
							<div className="partnerUpdateItem">
								<input
									type="text"
									placeholder={newPartner.legal_structure}
									onClick={() => {
										setNewPartner({
											...newPartner,
											legal_structure: "",
										});
									}}
									onChange={(e) => {
										setNewPartner({
											...newPartner,
											legal_structure: e.target.value,
										});
									}}
									className="partnerUpdateInput"
								/>
							</div>
							<div className="partnerUpdateItem">
								<input
									type="text"
									placeholder={newPartner.representataive}
									onClick={() => {
										setNewPartner({
											...newPartner,
											representataive: "",
										});
									}}
									onChange={(e) => {
										setNewPartner({
											...newPartner,
											representataive: e.target.value,
										});
									}}
									className="partnerUpdateInput"
								/>
							</div>
							<div className="partnerUpdateItem">
								<input
									type="text"
									placeholder={newPartner.post_code}
									onClick={() => {
										setNewPartner({
											...newPartner,
											post_code: "",
										});
									}}
									onChange={(e) => {
										setNewPartner({
											...newPartner,
											post_code: e.target.value,
										});
									}}
									className="partnerUpdateInput"
								/>
							</div>
						</form>
						<div className="partnerFormRight">
							<form className="partnerUpdateForm">
								<div className="partnerUpdateItem">
									<input
										type="text"
										placeholder={newPartner.address}
										onClick={() => {
											setNewPartner({
												...newPartner,
												address: "",
											});
										}}
										onChange={(e) => {
											setNewPartner({
												...newPartner,
												address: e.target.value,
											});
										}}
										className="partnerUpdateInput"
									/>
								</div>
								<div className="partnerUpdateItem">
									<input
										type="email"
										placeholder={newPartner.email}
										onClick={() => {
											setNewPartner({
												...newPartner,
												email: "",
											});
										}}
										onChange={(e) => {
											setNewPartner({
												...newPartner,
												email: e.target.value,
											});
										}}
										className="partnerUpdateInput"
									/>
								</div>
								<div className="partnerUpdateItem">
									<input
										type="text"
										placeholder={newPartner.state}
										onClick={() => {
											setNewPartner({
												...newPartner,
												state: "",
											});
										}}
										onChange={(e) => {
											setNewPartner({
												...newPartner,
												state: e.target.value,
											});
										}}
										className="partnerUpdateInput"
									/>
								</div>
								<div className="partnerUpdateItem">
									<input
										type="text"
										placeholder={newPartner.country}
										onClick={() => {
											setNewPartner({
												...newPartner,
												country: "",
											});
										}}
										onChange={(e) => {
											setNewPartner({
												...newPartner,
												country: e.target.value,
											});
										}}
										className="partnerUpdateInput"
									/>
								</div>
								<div className="partnerUpdateItem">
									<input
										type="text"
										placeholder={newPartner.login}
										onClick={() => {
											setNewPartner({
												...newPartner,
												login: "",
											});
										}}
										onChange={(e) => {
											setNewPartner({
												...newPartner,
												login: e.target.value,
											});
										}}
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
							<button
								id="saveButton"
								onClick={() => {
									savePartner();
								}}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
