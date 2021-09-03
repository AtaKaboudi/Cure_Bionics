const mysql = require("mysql");
const bcrypt = require("bcrypt");
//connect to database

const db = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
});

db.connect((err) => {
	const prompt = err ? err : "MYSQL Connected";
	console.log(prompt);
});

function queryPatient_email(email, callback) {
	db.query(
		"SELECT * FROM " + process.env.DATABASE_PATIENT_TABLE + " WHERE email =  ?",
		[email],
		async (err, resu) => {
			callback(err, resu);
		}
	);
}
function queryPatient_id(id, callback) {
	db.query(
		"SELECT * FROM " +
			process.env.DATABASE_PATIENT_TABLE +
			" WHERE patient_id =  ?",
		[id],
		async (err, resu) => {
			callback(err, resu);
		}
	);
}
function queryPatient_partner_id(partner_id, callback) {
	db.query(
		"SELECT * FROM " +
			process.env.DATABASE_PATIENT_TABLE +
			" WHERE partner_id =  ?",
		[partner_id],
		async (err, resu) => {
			callback(err, resu);
		}
	);
}

function insertPatient(req, callback) {
	db.query(
		"INSERT INTO " + process.env.DATABASE_PATIENT_TABLE + " SET ?",
		[req],
		(err, resu) => {
			callback(err, resu);
		}
	);
}

function updatePatient(params, id, callback) {
	db.query(
		"UPDATE " + process.env.DATABASE_PATIENT_TABLE + " SET ? WHERE patient_id",
		[params, id],
		(err, resu) => {
			callback(err, resu);
		}
	);
}

function deletePatient(patient_id, callback) {
	db.query(
		"DELETE FROM " +
			process.env.DATABASE_PATIENT_TABLE +
			" WHERE patient_id = ? ",
		[patient_id],
		(err, resu) => {
			callback(err, resu);
		}
	);
}

function queryPatient_status(status, partner_id, callback) {
	db.query(
		"  SELECT  COUNT(*) AS count FROM " +
			process.env.DATABASE_PATIENT_TABLE +
			" WHERE status = ? AND partner_id = ? ",
		[status, partner_id],
		(err, resu) => {
			callback(err, resu);
		}
	);
}

function queryAllPatient_status(status, callback) {
	db.query(
		"  SELECT  COUNT(*) AS count FROM " +
			process.env.DATABASE_PATIENT_TABLE +
			" WHERE status = ? ",
		[status],
		(err, resu) => {
			callback(err, resu);
		}
	);
}

function getCurrentDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + "/" + dd + "/" + yyyy;
	return today;
}

function queryPartner_id(id, callback) {
	db.query(
		"SELECT * FROM " +
			process.env.DATABASE_PARTNER_TABLE +
			" WHERE partner_id =  ?",
		[id],
		async (err, resu) => {
			callback(err, resu);
		}
	);
}

function queryPartnerRepresentative(partner_id, callback) {
	db.query(
		"SELECT company_name,representative,email,phone_number,country,rep_image_url FROM " +
			process.env.DATABASE_PARTNER_TABLE +
			" WHERE partner_id = ? ",
		[partner_id],
		(err, resu) => {
			callback(err, resu);
		}
	);
}
function insertPartner(req, callback) {
	db.query(
		"INSERT INTO " + process.env.DATABASE_PARTNER_TABLE + " SET ?",
		[req],
		(err, resu) => {
			console.log(err);
			callback(err, resu);
		}
	);
}

function updatePartner(params, id, callback) {
	db.query(
		"UPDATE " + process.env.DATABASE_PARTNER_TABLE + " SET ? WHERE partner_id",
		[params, id],
		(err, resu) => {
			console.log(err);
			callback(err, resu);
		}
	);
}

function deletePartner(partner_id, callback) {
	db.query(
		"DELETE FROM " +
			process.env.DATABASE_PARTNER_TABLE +
			" WHERE partner_id = ? ",
		[partner_id],
		(err, resu) => {
			callback(err, resu);
		}
	);
}

module.exports = {
	queryAllPatient_status,
	queryPatient_partner_id,
	queryPartnerRepresentative,
	queryPatient_status,
	queryPartner_id,
	queryPatient_email,
	queryPatient_id,
	insertPartner,
	insertPatient,
	updatePartner,
	updatePatient,
	deletePartner,
	deletePatient,
};
