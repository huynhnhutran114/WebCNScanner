// database here

var admin = require("firebase-admin");
var serviceAccount = require('../cn-scanner-firebase-adminsdk-d989v-9d6613c78f.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cn-scanner.firebaseio.com"
});

async function getUsers(id) {
    let db = admin.firestore();
    let userRef = db.collection('NGUOIDUNG').doc(id);
    let getDoc = userRef.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                console.log('Document data:', doc.data());
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
};

async function getAllUsers() {
    let db = admin.firestore();
    console.log("getting all user...");
    let usersRef = db.collection('NGUOIDUNG');
    return await usersRef.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.get('Id'));
            });
            return snapshot;
        })
        .catch(err => {
            console.log('Error getting documents', err);
            return err;
        });
};


module.exports = {
    getUsers: getUsers,
    getAllUsers: getAllUsers,
}