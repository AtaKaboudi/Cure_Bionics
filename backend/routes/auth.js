const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
router.get("/email", (req, res) => {
	let { email } = req.query;
	db.checkEmail(email, (err, resu) => {
		if (err) {
			return res

				.send({ status: "Error", message: "Internal Server Error" })
				.status(500);
		}
		if (resu.length == 0) {
			return res
				.status(403)
				.send({ status: "Unauthorized", message: "Unknown Client" });
		}
		if (resu[0].password == "") {
			return res
				.status(200)
				.json({ partner_id: resu[0].partner_id, firstTime: true });
		}
		res.status(200).json({ partner_id: resu[0].partner_id, firstTime: false });
	});
});
router.post("/password", (req, res) => {
	let { partner_id, password } = req.body;
	db.updatePassword(
		{ partner_id: partner_id, password: password },
		(err, resu) => {
			if (err) {
				return res
					.send({ status: "Error", message: "Internal Server Error" })
					.status(500);
			}
			if (resu.affectedRows >= 1) {
				return res.status(200).json({ message: "Success" });
			} else res.status(200).json({ message: "Failed" });
		}
	);
});
router.get("/password", (req, res) => {
	let { login, password } = req.query;
	db.login({ login: login }, (err, resu) => {
		if (err) {
			return res

				.send({ status: "Error", message: "Internal Server Error" })
				.status(500);
		}
		if (!resu[0]) {
			res.send({ status: "Error", message: "Invalid Login" });
			return;
		}
		if (bcrypt.compareSync(password, resu[0].password)) {
			res.json({ partner_id: resu[0].partner_id }).status(200);
			return;
		}
		res.json({ status: "Error", message: "Invalid Password" }).status(403);
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
