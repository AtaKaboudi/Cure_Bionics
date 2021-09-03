import React from "react";
import "./adminSidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="adminSidebar">
			<div className="sidebarWrapper">
				<h3 className="sidebarTitle">Dashboard</h3>

				<ul className="sidebarList">
					<Link to="/admin" style={{ textDecoration: "none" }}>
						<li>
							<span class="material-icons">home</span>
							<h2>Home</h2>
							<span class="material-icons">chevron_right</span>
						</li>
					</Link>

					<Link to="/admin/newPartner" style={{ textDecoration: "none" }}>
						<li>
							<span class="material-icons">add</span>
							<h2>New Partner</h2>
							<span class="material-icons">chevron_right</span>
						</li>
					</Link>

					<li>
						<span class="material-icons">leaderboard</span>
						<h2>Stats</h2>
						<span class="material-icons">chevron_right</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
