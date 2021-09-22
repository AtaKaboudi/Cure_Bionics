const express = require("express");
const router = express.Router();
const db = require("../db");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: "./upload/",
	filename: function (req, file, cb) {
		cb(null, "Scan" + "-" + Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({
	storage: storage,
});

var multipleUploads = upload.fields([{ name: "scan" }, { name: "limb_photo" }]);

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

router.post("/", multipleUploads, (req, res) => {
	// INPUT VALDIATION
	if (!req.files.scan) {
		return res.send("Wrong INPUT");
	}
	req.body.scan_url = req.files.scan[0].filename;
	req.body.limb_photo_url = req.files.limb_photo[0].filename;
	db.insertPatient(req.body, res, (err, resu) => {
		if (err) {
			res.send("error");
			console.log(err);
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
