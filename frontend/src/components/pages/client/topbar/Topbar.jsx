import React from "react";
import "./topbar.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<Link to="/" style={{ textDecoration: "none" }}>
					<div className="topLeft">
						<span className="logo">Cure Bionics</span>
					</div>
				</Link>
				<div className="centerText">
					<h2> Digibionics</h2>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<DashboardIcon />
						<span className="topIconBadge"></span>
					</div>

					<div className="topbarIconContainer">
						<SettingsIcon />
					</div>
					<img
						src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
						alt=""
						className="topAvatar"
					/>
				</div>
			</div>
		</div>
	);
}
