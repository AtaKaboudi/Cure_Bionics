import Signup from "./components/form/Signup";
import "./app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/">
						<Signup />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
