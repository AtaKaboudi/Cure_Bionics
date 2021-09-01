import "./signup.scss";
import { useState } from "react";
import logoPng from "../../../../cure.png";

export default function Signup() {
  let [holderEmail, setHolderEmail] = useState("Email");
  let [holderPassword, setholderPassword] = useState("Password");
  let [holderId, setHolderId] = useState("CureId");

  return (
    <div className="signup">
      <img alt="logo" src={logoPng} />
      <h1>digibionics</h1>
      <h2>Partner</h2>
      <form>
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder={holderEmail}
          onClick={() => setHolderEmail("")}
          onChange={(e) => {
            setHolderEmail(e.target.textContent);
          }}
        />
        <input
          type="password"
          placeholder={holderPassword}
          onClick={() => setholderPassword("")}
          onChange={(e) => {
            setholderPassword(e.target.textContent);
          }}
        />
        <input
          type="id"
          placeholder={holderId}
          onClick={() => setHolderId("")}
          onChange={(e) => {
            setHolderId(e.target.textContent);
          }}
        />
        <button>
          Login
          <span className="material-icons">chevron_right</span>
        </button>
      </form>
    </div>
  );
}
