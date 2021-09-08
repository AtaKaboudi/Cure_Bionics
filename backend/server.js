const express = require("express");
const app = express();

//ENVIRONNMENT CNFIG
require("dotenv").config();

//Body access
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/patient", require("./routes/patient"));
app.use("/auth", require("./routes/auth"));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(process.env.PORT);
