const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
	res.send("patient");
});

router.get("/email", (req, res) => {
	let email = req.body.email;

	db.queryPatient_email(email, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});

router.get("/group", (req, res) => {
	console.log(req.query);
	if (!req.query.offset || !req.query.limit || !req.query.partner_id) {
		res.send("INPUT ERROR");
		return;
	}
	db.getPatientsGroup(req.query, (err, resu) => {
		if (err) {
			res.send("error");
			return;
		}
		res.status(200).send(resu);
	});
});

router.get("/id/:id", (req, res) => {
	let id = req.params.id;

	db.queryPatient_id(id, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});

router.post("/", (req, res) => {
	// INPUT VALDIATION

	db.insertPatient(req.body, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});

router.put("/:id", (req, res) => {
	let patient_id = req.params.id;
	let params = req.body;
	db.updatePatient(params, patient_id, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});
router.delete("/:id", (req, res) => {
	let id = req.params.id;
	db.deletePatient(id, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});
module.exports = router;
