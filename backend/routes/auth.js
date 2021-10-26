const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
router.get("/email", (req, res) => {
	let { email } = req.query;
	db.checkEmail(email, (err, resu) => {
		if (err) {
			return res
				.status(500)
				.send({ status: "Error", message: "Internal Server Error" });
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
router.post("/password", async (req, res) => {
	let { partner_id, password } = req.body;
	let salt = await bcrypt.genSalt(15);
	bcrypt.hash(password, salt, (err, passwordHash) => {
		db.updatePassword(
			{ partner_id: partner_id, password: passwordHash },
			(err, resu) => {
				if (err) {
					return res
						.send({ status: "Error", message: "Internal Server Error" })
						.status(500);
				}
				if (resu.affectedRows >= 1) {
					return res.status(200).json({ status: "Success" });
				} else res.status(200).json({ status: "Failed" });
			}
		);
	});
});
router.get("/password", async (req, res) => {
	let { partner_id, password } = req.query;
	db.login({ partner_id: partner_id }, async (err, resu) => {
		if (err) {
			return res

				.send({ status: "Error", message: "Internal Server Error" })
				.status(500);
		}
		if (!resu[0]) {
			return res.send({ status: "Error", message: "Invalid Login" });
		}
		bcrypt.compare(password, resu[0].password, (err, resu) => {
			if (resu) {
				return res.status(200).json({ status: "Success" });
			} else {
				return res
					.status(403)
					.json({ status: "Failed", message: "WROND_PASSWORD" });
			}
		});
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
