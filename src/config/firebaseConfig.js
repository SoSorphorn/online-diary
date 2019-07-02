
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBKE-a_Vhucub16VXVvKcTQFAydlQuFTMA",
  authDomain: "online-diary-react-project.firebaseapp.com",
  databaseURL: "https://online-diary-react-project.firebaseio.com",
  projectId: "online-diary-react-project",
  storageBucket: "online-diary-react-project.appspot.com",
  messagingSenderId: "62369737493",
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots : true});

export default firebase;