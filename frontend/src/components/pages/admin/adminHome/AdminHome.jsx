import React, { useState } from "react";
import "./adminHome.scss";
import TopBar from "../topbar/Topbar";
import AdminSidebar from "../adminSidebar/AdminSidebar";
import PartnerCard from "./partnerCard/partnerCard";
import { useEffect } from "react";
import global from "../.env.js";
import axios from "axios";
export default function AdminHome() {
	let [params, setParams] = useState([
		{
			partner_id: 1,
			login: "a",
			password: "a",
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
				"data:image/jpeg;base64,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",
		},
	]);

	useEffect(() => {
		axios
			.get(
				global.BACKEND + "partner/group",

				{
					params: {
						offset: 0,
						limit: 5,
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
				global.BACKEND + "partner/status/all",

				{}
			)
			.then((res) => {
				try {
					setOverview(res.data);
				} catch (err) {
					console.log(err);
				}
			});
	}, []);
	let [overview, setOverview] = useState({
		waiting: 2,
		fitted: 2,
	});
	return (
		<div className="adminHome">
			<TopBar />
			<div className="mainSection">
				<AdminSidebar />
				<div className="adminMainPannelContainer">
					<div className="partnerOverview">
						<div className="featuredItem">
							<span className="featuredTitle">
								Total patient number from all partners
							</span>
							<div className="featurePartnerContainer">
								<span className="featuredPartner">
									{overview.waiting + overview.fitted}
								</span>
							</div>
						</div>

						<div className="featuredItem">
							<span className="featuredTitle">
								Total patients waiting from all partners
							</span>
							<div className="featurePartnerContainer">
								<span className="featuredPartner">{overview.waiting}</span>
							</div>
						</div>

						<div className="featuredItem">
							<span className="featuredTitle">
								Total patients fitted from all partners
							</span>
							<div className="featurePartnerContainer">
								<span className="featuredPartner">{overview.fitted}</span>
							</div>
						</div>
					</div>

					<h1>Partner Overview</h1>

					<div className="partnerList">
						{params.map((e) => (
							<PartnerCard params={e} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
