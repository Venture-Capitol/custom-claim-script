const { initializeApp } = require("firebase-admin/app");
const admin = require("firebase-admin");
const { getAuth } = require("firebase-admin/auth");
const serviceAccount = require("./firebase.json");
var uid = process.argv[2];

if (uid) {
    initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    getAuth().setCustomUserClaims(uid, {role: "user"}).then(() => {
        console.log("Custom Claim got set to user. No longer an admin.");
    }).then(() => {
        getAuth().revokeRefreshTokens(uid).then(() => {
            console.log("Refresh Tokens successfully revoked.");
            process.exit();
        }).catch(error => {
            console.log("Error revoking Refresh Tokens: ", error);
            process.exit();
        });
    }).catch(error => {
        console.log("Error adding Custom Claim: ", error);
        process.exit();
    });
} else {
    console.log("UID argument is required.");
    process.exit();
}
