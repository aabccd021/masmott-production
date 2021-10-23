// NOTE: This file should not be edited
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const next = require("next");
const conf = require("./next.config");

admin.initializeApp()

const nextApp = next({ dev: false, conf });

const handle = nextApp.getRequestHandler();

const server = functions.https.onRequest((request, response) =>
	nextApp.prepare().then(() => handle(request, response))
);

exports.nextjs = { server };