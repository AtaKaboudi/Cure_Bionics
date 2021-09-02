import React from "react";
import "./adminSidebar.scss";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
	return (
		<div className="adminSidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/admin">
							<li className="sidebarListItem">
								<LineStyleIcon className="sidebarIcon" />
								Home
							</li>
						</Link>
						<li className="sidebarListItem">
							<PeopleOutlineIcon className="sidebarIcon" />
							Partners
						</li>
						<Link to="/admin/newPartner">
							<li className="sidebarListItem">
								<PersonAddIcon className="sidebarIcon" />
								New Partner
							</li>
						</Link>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<MailOutlineIcon />
							Contact
						</li>

						<li className="sidebarListItem">
							<HelpOutlineIcon />
							Help
						</li>

						<li className="sidebarListItem">
							<FeedbackIcon />
							Feedback
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
