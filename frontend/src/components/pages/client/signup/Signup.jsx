import "./signup.scss";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logoPng from "../../../../cure.png";
import global from "../.env";
import axios from "axios";
import ChangePassword from "./changePassword/changePassword";

export default function Signup() {
	let [email, setEmail] = useState("Email");
	let [togglePassword, setTogglePassword] = useState({
		state: false,
	});
	let passwordInput = {};

	function checkEmailRequest() {
		axios
			.get("http://localhost:8080/auth/email", {
				params: {
					email: email,
				},
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				passwordInput = res.data;
				console.log(res.data);
				setTogglePassword({
					state: true,
					...res.data,
				});
			})
			.catch((err) => {
				window.location.reload();
			});
	}

	return (
		<div className="signup">
			<img alt="logo" src={logoPng} />
			<h1>digibionics</h1>
			<h2>Partner</h2>

			{!togglePassword.state ? (
				<form>
					<h1>Sign In</h1>
					<input
						type="text"
						placeholder={email}
						onClick={() => setEmail("")}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>

					<button
						onClick={(e) => {
							e.preventDefault();
							checkEmailRequest();
						}}>
						Login
						<span className="material-icons">chevron_right</span>
					</button>
					<label id="errorPrompt"> </label>
				</form>
			) : (
				<ChangePassword input={togglePassword} />
			)}
		</div>
	);
}
