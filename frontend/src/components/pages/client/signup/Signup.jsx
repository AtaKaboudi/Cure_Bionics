import "./signup.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logoPng from "../../../../cure.png";
import global from "../.env";
import axios from "axios";
import ChangePassword from "./changePassword/changePassword";

export default function Signup() {
	let [loginInput, setLoginInput] = useState({
		login: "Login",
		password: "Password",
		cureId: " Cure ID",
	});
	let [toggleChangePassword, setToggleChangePasword] = useState(false);
	let history = useHistory();

	function loginRequest() {
		axios
			.get(global.BACKEND + "auth/", {
				headers: {
					"Content-Type": "multipart/form-data",
				},
				params: loginInput,
			})
			.then((res) => {
				let url = "";
				console.log(res);
				if (res.data.status !== "Error") {
					if (res.data.partner_id !== 0) {
						url = "/partner";
					} else {
						url = "/admin";
					}
					history.push(url);
					localStorage.setItem("token", res.data.partner_id);
				} else {
					document.getElementById("errorPrompt").innerHTML = "Try Again";
				}
			});
	}
	return (
		<div className="signup">
			<img alt="logo" src={logoPng} />
			<h1>digibionics</h1>
			<h2>Partner</h2>
			{!toggleChangePassword ? (
				<form>
					<h1>Sign In</h1>
					<input
						type="text"
						placeholder={loginInput.login}
						onClick={() => setLoginInput({ ...loginInput, login: "" })}
						onChange={(e) => {
							setLoginInput({ ...loginInput, login: e.target.value });
						}}
					/>
					<input
						type="password"
						placeholder={loginInput.password}
						onClick={() => () => setLoginInput({ ...loginInput, password: "" })}
						onChange={(e) => {
							setLoginInput({ ...loginInput, password: e.target.value });
						}}
					/>
					<input
						type="id"
						placeholder={loginInput.cureId}
						onClick={() => setLoginInput({ ...loginInput, cureId: "" })}
						onChange={(e) => {
							setLoginInput({ ...loginInput, cureId: e.target.value });
						}}
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							loginRequest();
						}}>
						Login
						<span className="material-icons">chevron_right</span>
					</button>
					<label id="errorPrompt"> </label>
					<label
						onClick={() => {
							setToggleChangePasword(!toggleChangePassword);
						}}>
						Change Password
					</label>
				</form>
			) : (
				<ChangePassword />
			)}
		</div>
	);
}
