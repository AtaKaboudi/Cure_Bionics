const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
	let { login, password } = req.body;
	db.login({ login }, (err, resu) => {
		if (err) res.send("error");
		console.log(password, resu);

		if (!resu[0]) {
			res.send("Unknown");
			return;
		}
		if (bcrypt.compareSync(password, resu[0].password)) {
			res.send("succesfull Registry");
		}
	});
});

router.post("/", async (req, res) => {
	if (!req.body.login || !req.body.password || !req.body.company_name)
		res.send("Invalid Input");

	let salt = await bcrypt.genSalt(15);
	bcrypt.hash(req.body.password, salt, (err, passwordHash) => {
		db.signUp({ ...req.body, password: passwordHash }, (err, resu) => {
			if (err) {
				res.send("error");
				return;
			}
			res.status(200).send("Successful Registry");
		});
	});
});

module.exports = router;
