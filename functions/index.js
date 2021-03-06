const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
    return admin.firestore()
        .collection('notifications')
        .add(notification)
        .then((res)=>{
            console.log("Notification Added", res);
        })
        .catch((err)=>{
            console.log("Notification Not Added", err);
        });
}

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc =>{
        const project = doc.data();
        const notification = {
            content: 'Added a New Project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    });

exports.newUserCreated = functions.firestore
    .document('users/{userId}')
    .onCreate(doc => {
        const user = doc.data();
        const notification = {
            content: 'Joined the party',
            user: `${user.firstName} ${user.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    });

exports.userJoined = functions.auth.user().onCreate(user=>{
    return admin.firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(doc=>{
            const user = doc.data();
            const notification = {
                content: 'Joined the party',
                user: `${user.firstName} ${user.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification);
        })
});