import { useState } from "react";
import "./changePassword.scss";
export default function ChangePassword() {
	let [input, setInput] = useState({
		email: "Email",
		password: "Password",
		newPassword: "New Password",
		confirmPassword: "Confirm Password",
	});
	function submitPasswordChange() {}
	return (
		<form id="changePasswordContainer">
			<h3>Change Password </h3>
			<input
				placeholder={input.email}
				onClick={() => setInput({ ...input, email: "" })}
				onChange={(e) => setInput({ ...input, email: e.target.value })}></input>
			<input
				placeholder={input.password}
				onClick={() => setInput({ ...input, password: "" })}
				onChange={(e) =>
					setInput({ ...input, password: e.target.value })
				}></input>
			<input
				placeholder={input.newPassword}
				onClick={() => setInput({ ...input, newPassword: "" })}
				onChange={(e) =>
					setInput({ ...input, newPassword: e.target.value })
				}></input>
			<input
				placeholder={input.confirmPassword}
				onClick={() => setInput({ ...input, confirmPassword: "" })}
				onChange={(e) =>
					setInput({ ...input, confirmPassword: e.target.value })
				}></input>
			<button
				onClick={() => {
					submitPasswordChange();
				}}>
				Submit
			</button>
		</form>
	);
}
