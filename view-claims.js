const { initializeApp } = require("firebase-admin/app");
const admin = require("firebase-admin");
const { getAuth } = require("firebase-admin/auth");
const serviceAccount = require("./firebase.json");
var uid = process.argv[2];

if (uid) {
    initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    getAuth().getUser(uid).then(user => {
        const currentCustomClaims = user.customClaims;
        if (currentCustomClaims != undefined && currentCustomClaims["isAdmin"] != undefined) {
            console.log("Custom Claim isAdmin: " + currentCustomClaims["isAdmin"]);
        } else {
            console.log("Custom Claim isAdmin is not set for this UID.")
        }
        process.exit();
    }).catch(error => {
        console.log("Error reading Custom Claims: ", error);
        process.exit();
    })
} else {
    console.log("UID argument is required.");
    process.exit();
}
