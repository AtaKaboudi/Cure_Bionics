import { useEffect, useRef, useState } from "react";
import "./changePassword.scss";
import axios from "axios";
import { useHistory } from "react-router";
export default function ChangePassword(props) {
	let [firstTime, setFirstTime] = useState(props.input.firstTime);
	let [partner_id, setPartner_id] = useState(props.input.partner_id);

	let history = useHistory();

	let [newPasswordInput, setNewPasswordInput] = useState({
		password: " Password",
		confirmPassword: "Confirm Password",
	});
	let [password, setPassword] = useState("Enter Password");
	function loginRequest() {
		axios
			.get("http://localhost:8080/auth/password", {
				params: {
					partner_id: partner_id,
					password: password,
				},
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				if (res.status === 200) {
					localStorage.setItem("partner_id", partner_id);
					partner_id === 0 ? history.push("/admin") : history.push("/partner");
				}
			});
	}

	function updatePassword() {
		console.log(partner_id, newPasswordInput.password);
		axios
			.post("http://localhost:8080/auth/password", {
				partner_id: partner_id,
				password: newPasswordInput.password,
			})
			.then((res) => {
				console.log(res);
				if ((res.data.status = "Success")) {
					history.push("/partner");
				} else {
					window.location.reload(false);
				}
			});
	}

	return (
		<div className="changePasswordContainer">
			{firstTime ? (
				<form>
					<label>New Password </label>
					<input
						placeholder={newPasswordInput.password}
						onClick={() =>
							setNewPasswordInput({ ...newPasswordInput, password: "" })
						}
						onChange={(e) =>
							setNewPasswordInput({
								...newPasswordInput,
								password: e.target.value,
							})
						}></input>
					<input
						placeholder={newPasswordInput.confirmPassword}
						onClick={() =>
							setNewPasswordInput({ ...newPasswordInput, confirmPassword: "" })
						}
						onChange={(e) =>
							setNewPasswordInput({
								...newPasswordInput,
								confirmPassword: e.target.value,
							})
						}></input>
					<button
						onClick={(e) => {
							e.preventDefault();
							updatePassword();
						}}>
						Submit
					</button>
				</form>
			) : (
				<form>
					<label>Password </label>
					<input
						placeholder={password}
						onClick={() => {
							setPassword("");
						}}
						onChange={(e) => {
							setPassword(e.target.value);
						}}></input>
					<button
						onClick={(e) => {
							e.preventDefault();
							loginRequest();
						}}>
						Login
					</button>
				</form>
			)}
		</div>
	);
}
