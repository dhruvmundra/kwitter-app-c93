
const firebaseConfig = {
  apiKey: "AIzaSyDVVSPxUHwGjfNHtidcVu8Obpd66b0fFeQ",
  authDomain: "kwitter-93a5b.firebaseapp.com",
  databaseURL: "https://kwitter-93a5b-default-rtdb.firebaseio.com",
  projectId: "kwitter-93a5b",
  storageBucket: "kwitter-93a5b.appspot.com",
  messagingSenderId: "622153470595",
  appId: "1:622153470595:web:3de540143e983df0ae41b6",
  measurementId: "G-GH5WEFG7BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  