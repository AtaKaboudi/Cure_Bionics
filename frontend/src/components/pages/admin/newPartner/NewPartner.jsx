import React from "react";
import "./newPartner.scss";
import PublishIcon from "@material-ui/icons/Publish";
import Topbar from "../../admin/topbar/Topbar";
import AdminSidebar from "../../admin/adminSidebar/AdminSidebar";
import { useState } from "react";
import axios from "axios";
import { uploadCloud } from "../../client/firebase/firebase";
import { useHistory } from "react-router";
export default function NewPartner() {
	let history = useHistory();

	let [newPartner, setNewPartner] = useState({
		company_name: "Company Name",
		representative: "Representative",
		phone_number: "Phone Number",
		email: "Email",
		address: "Address",
		state: "State",
		postcode: "PostCode",
		legal_structure: "Legal Structure",
		country: "Coutnry ",
		login: "Login",
		password: "-",
		repImgFile: {},
	});

	function savePartner() {
		uploadCloud(newPartner.repImgFile, "REP_PHOTO", (rep_url) => {
			newPartner["rep_image_url"] = rep_url;
			delete newPartner.repImgFile;
			axios
				.post("http://localhost:8080/partner/", newPartner, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((res) => {
					history.push("/admin");
					window.location.reload();
				});
		});
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
									placeholder={newPartner.representative}
									onClick={() => {
										setNewPartner({
											...newPartner,
											representative: "",
										});
									}}
									onChange={(e) => {
										setNewPartner({
											...newPartner,
											representative: e.target.value,
										});
									}}
									className="partnerUpdateInput"
								/>
							</div>
							<div className="partnerUpdateItem">
								<input
									type="text"
									placeholder={newPartner.postcode}
									onClick={() => {
										setNewPartner({
											...newPartner,
											postcode: "",
										});
									}}
									onChange={(e) => {
										setNewPartner({
											...newPartner,
											postcode: e.target.value,
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
							<input
								type="file"
								onChange={(e) => {
									newPartner["repImgFile"] = e.target.files[0];
								}}
								id="file"
							/>

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
