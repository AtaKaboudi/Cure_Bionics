import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="partnerSidebar">
			<div className="sidebarWrapper">
				<h3 className="sidebarTitle">Dashboard</h3>

				<ul className="sidebarList">
					<Link to="/partner" style={{ textDecoration: "none" }}>
						<li>
							<span className="material-icons">home</span>
							<h2>Home</h2>
							<span className="material-icons">chevron_right</span>
						</li>
					</Link>

					<Link to="/partner/company" style={{ textDecoration: "none" }}>
						<li>
							<span className="material-icons">tune</span>
							<h2>Settings</h2>
							<span className="material-icons">chevron_right</span>
						</li>
					</Link>
					<Link to="/partner/newPatient" style={{ textDecoration: "none" }}>
						<li>
							<span className="material-icons">add</span>
							<h2>New</h2>
							<span className="material-icons">chevron_right</span>
						</li>
					</Link>

					<li>
						<span className="material-icons">leaderboard</span>
						<h2>Stats</h2>
						<span className="material-icons">chevron_right</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
