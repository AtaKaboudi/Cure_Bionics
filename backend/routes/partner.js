const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
	res.send("partner");
});

router.get("/id/:id", (req, res) => {
	let id = req.params.id;

	db.queryPartner_id(id, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});

router.post("/", (req, res) => {
	// INPUT VALDIATION

	db.insertPartner(req.body, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});

router.put("/:id", (req, res) => {
	let patient_id = req.params.id;
	let params = req.body;

	db.updatePartner(params, patient_id, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});

router.delete("/:id", (req, res) => {
	let id = req.params.id;
	db.deletePartner(id, (err, resu) => {
		if (err) res.send("error");
		res.status(200).send(resu);
	});
});

// Patient sort on status
router.get("/status", (req, res) => {
	let partner_id = req.body.partner_id;
	let response = {};
	db.queryPatient_status(0, partner_id, (err, resu) => {
		if (err) res.send("error");
		response.waiting = resu[0].count;

		db.queryPatient_status(1, partner_id, (err, resu) => {
			if (err) res.send("error");
			response.fitted = resu[0].count;

			res.send(response);
		});
	});
});
router.get("/status/all", (req, res) => {
	let response = {};
	db.queryAllPatient_status(0, (err, resu) => {
		if (err) res.send("error");
		response.waiting = resu[0].count;

		db.queryAllPatient_status(1, (err, resu) => {
			if (err) res.send("error");
			response.fitted = resu[0].count;

			res.send(response);
		});
	});
});

router.get("/representative", (req, res) => {
	let partner_id = req.body.partner_id;
	db.queryPartnerRepresentative(partner_id, (err, resu) => {
		if (err) res.send("error");
		res.send(resu[0]);
	});
});

router.get("/patient", (req, res) => {
	let partner_id = req.body.partner_id;
	db.queryPatient_partner_id(partner_id, (err, resu) => {
		if (err) res.send("error");
		res.send(resu[0]);
	});
});

module.exports = router;
