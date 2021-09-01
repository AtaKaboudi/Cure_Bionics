import Company from "./components/pages/client/company/Company";
import UpdatePatient from "./components/pages/client/updatePatient/updatePatient";
import Home from "./components/pages/client/home/Home";
import NewPartner from "./components/pages/admin/newPartner/NewPartner";
import AdminHome from "./components/pages/admin/adminHome/AdminHome";
import Signup from "./components/pages/client/signup/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.scss";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route component={Home} path="/partner" exact />
					<Route component={Company} path="/partner/company" />
					<Route component={UpdatePatient} path="/partner/updatePatient" />
					<Route component={Signup} path="/partner/signUp"></Route>
					<Route component={NewPartner} path="/admin/newpartner"></Route>
					<Route component={AdminHome} path="/admin"></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
