

const admin = require("firebase-admin");

const serviceAccount = require("../certificado/presupuesto-d827e-firebase-adminsdk-nwxyl-41abe43924.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firebase = admin.database();

module.exports = {firebase};