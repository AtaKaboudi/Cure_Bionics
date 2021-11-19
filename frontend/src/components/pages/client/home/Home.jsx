import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../topbar/Topbar";
import SideBar from "../sidebar/Sidebar";
import PatientCard from "./patientCard/patientCard";
import global from "../.env.js";
import "./home.scss";

export default function FeaturedInfo() {
	useEffect(() => {
		axios
			.get(
				global.BACKEND + "patient/group",

				{
					params: {
						offset: "1",
						limit: "5",
						partner_id: localStorage.getItem("partner_id"),
					},
				}
			)
			.then((res) => {
				try {
					setParams(res.data);
				} catch (err) {
					console.log(err);
				}
			});
		axios
			.get(
				global.BACKEND + "partner/status",

				{
					params: {
						partner_id: localStorage.getItem("partner_id"),
					},
				}
			)
			.then((res) => {
				try {
					setOverview(res.data);
				} catch (err) {
					console.log(err);
				}
			});
	}, []);

	let [params, setParams] = useState([
		{
			partner_id: -1,
			first_name: "",
			last_name: "",
			photo_url:
				"data:image/jpeg;base64,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",
		},
	]);
	let [overview, setOverview] = useState({
		waiting: 1,
		fitted: 1,
	});
	return (
		<div className="home">
			<TopBar />
			<div className="featured">
				<SideBar />
				<div className="dashboardContainer">
					<h2>Overview</h2>
					<div className="patientOverview">
						<div className="featuredItem">
							<span className="featuredTitle">Total patients</span>
							<div className="featurePatientContainer">
								<span className="featuredPatient">
									{overview.fitted + overview.waiting}
								</span>
							</div>
						</div>

						<div className="featuredItem">
							<span className="featuredTitle">Patients waiting</span>
							<div className="featurePatientContainer">
								<span className="featuredPatient">{overview.waiting}</span>
							</div>
						</div>

						<div className="featuredItem">
							<span className="featuredTitle">Patients fitted</span>
							<div className="featurePatientContainer">
								<span className="featuredPatient">{overview.fitted}</span>
							</div>
						</div>
					</div>

					<h2>Patients</h2>
					<div className="patientList">
						{params.map((e) => (
							<PatientCard params={e} key={e.first_name} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
