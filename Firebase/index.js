import firebase from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyCvxLGcMGJumYcQTvl9EpgBchnTqrpf-Og",
    authDomain: "image-storage-taalnetwork.firebaseapp.com",
    projectId: "image-storage-taalnetwork",
    storageBucket: "image-storage-taalnetwork.appspot.com",
    messagingSenderId: "619771034090",
    appId: "1:619771034090:web:e2a1cab8ebe653c188da93",
    measurementId: "G-M6YK73Y61P"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

  export{storage, fireabse as default};