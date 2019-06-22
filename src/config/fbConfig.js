import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCpGNTOxGxVTNe5_wYIYI4yieNZ4AAfgd4",
  authDomain: "mariplan-app.firebaseapp.com",
  databaseURL: "https://mariplan-app.firebaseio.com",
  projectId: "mariplan-app",
  storageBucket: "mariplan-app.appspot.com",
  messagingSenderId: "131266347486",
  appId: "1:131266347486:web:358142a47d7320dd"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;