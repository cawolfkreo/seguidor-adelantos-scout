"use strict";

import express from "express";
const app = express();
const port = 9000;

console.log("WIP - Todo: Everything!!!");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Hola mundo");
});

app.listen(port, () => {
	console.log(`Express listening on port ${port}`);
});