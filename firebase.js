var firebaseConfig = {
  apiKey: "AIzaSyAYOtAz6M8xOikjUN9xKb9jeCB5rMkPLzo",
  authDomain: "clone-two-fb532.firebaseapp.com",
  projectId: "clone-two-fb532",
  storageBucket: "clone-two-fb532.appspot.com",
  messagingSenderId: "542462038608",
  appId: "1:542462038608:web:caf460e8994b75d386b755",
  measurementId: "G-G4H5ZTQDK0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
