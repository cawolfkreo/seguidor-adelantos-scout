"use strict";

import express from "express";

import { RUN_IN_DEV } from "./src/setup.js";
import setupSwagger from "./src/swagger-setup.js";

const app = express();
const port = 9000;

console.log("WIP - Todo: Everything!!!");

app.use(express.static("public"));

/**
* @openapi
* /hello:
*   get:
*     description: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
app.get("/hello", (_req, res) => {
	res.send("Hola mundo");
});

app.listen(port, () => {
	console.log(`Express listening on port ${port}`);
	if (RUN_IN_DEV) {
		setupSwagger(app, port);
	}
});
