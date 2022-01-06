const { initializeApp } = require("firebase-admin/app");
const admin = require("firebase-admin");
const { getAuth } = require("firebase-admin/auth");
const serviceAccount = require("./firebase.json");
var uid = process.argv[2];

if (uid) {
    initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    getAuth().setCustomUserClaims(uid, {role: "admin"}).then(() => {
        console.log("Custom Claim successfully added to UID.");
        process.exit();
    }).catch(error => {
        console.log("Error adding Custom Claim: ", error);
        process.exit();
    });
} else {
    console.log("UID argument is required.");
    process.exit();
}
