function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}
var firebaseConfig = { apiKey: "AIzaSyAJxTDrh3sr0ze3s3tWyWHzww08WbPGmqo", authDomain: "kwitter-app-906fb.firebaseapp.com", databaseURL: "https://kwitter-app-906fb-default-rtdb.firebaseio.com", projectId: "kwitter-app-906fb", storageBucket: "kwitter-app-906fb.appspot.com", messagingSenderId: "267317311916", appId: "1:267317311916:web:7b702ff6bbe93daa5d6209", measurementId: "G-M7RE70XLY0" }; // Initialize Firebase firebase.initializeApp(firebaseConfig);