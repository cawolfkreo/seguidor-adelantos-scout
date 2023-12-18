"use strict";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

/**
 * Sets up swagger middleware for express
 * 
 * @param {Express} app The express App
 * @param {Number} port The port the application will listen to
 */
export default function setupSwagger(app, port) {
	const options = {
		definition: {
			openapi: "3.1.0",
			info: {
				title: "Adelantos Scout",
				version: "1.0.0",
			},
		},
		apis: ["./server.js"], // files containing annotations as above
	};
	
	const openapiSpecification = swaggerJsdoc(options);

	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
	console.log(`API docs running on: http://localhost:${port}/api-docs`);
}