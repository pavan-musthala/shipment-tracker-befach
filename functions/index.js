/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require('firebase-functions');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = functions.https.onRequest((req, res) => {
//   logger.info("Hello logs!", {structuredData: true});
//   res.send("Hello from Firebase!");
// });

// Your function implementations here
exports.yourFunction = functions.https.onRequest((req, res) => {
  // Function logic
  res.send('Hello from Firebase!');
});
