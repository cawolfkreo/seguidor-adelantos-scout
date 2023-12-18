"use strict";

let { NODE_ENV } = process.env;

export const RUN_IN_DEV = !NODE_ENV ? true : false;