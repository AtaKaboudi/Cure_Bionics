const express = require("express");
const router = express.Router();
const db = require("../db");
const path = require("path");

router.get("/email", (req, res) => {
	let email = req.body.email;

	db.queryPatient_email(email, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});

router.get("/group", (req, res) => {
	if (!req.query.offset || !req.query.partner_id) {
		res.status(400).send("INPUT ERROR");
		return;
	}
	db.getPatientsGroup(req.query, (err, resu) => {
		if (err) {
			res.status(400).send("error");
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
	console.log(req);
	return;
	db.insertPatient(req.body, res, (err, resu) => {
		if (err) {
			res.status(500).send("error");
			return;
		}
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
