import { useEffect, useRef, useState } from "react";
import "./changePassword.scss";
import axios from "axios";
import { useHistory } from "react-router";
export default function ChangePassword(props) {
	let firstTime;
	useEffect(() => {
		firstTime = props.input.firstTime;
	}, []);
	alert(firstTime);

	let [newPasswordInput, setNewPasswordInput] = useState({
		password: " Password",
		confirmPassword: "Confirm Password",
	});

	return (
		<div>
			{firstTime ? (
				<form>
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
				</form>
			) : (
				<h1>Second</h1>
			)}
		</div>
	);
}
