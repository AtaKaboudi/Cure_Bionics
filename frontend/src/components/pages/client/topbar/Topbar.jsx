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
			</div>
		</div>
	);
}
