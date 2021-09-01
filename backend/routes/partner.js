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
module.exports = router;
