
const firebaseConfig = {
      apiKey: "AIzaSyCYvbfCvtf_GWWg0DmbNTWfNxXrcEj-egI",
      authDomain: "kwitter-app-ab873.firebaseapp.com",
      databaseURL: "https://kwitter-app-ab873-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-ab873",
      storageBucket: "kwitter-app-ab873.appspot.com",
      messagingSenderId: "496979231404",
      appId: "1:496979231404:web:a01acf7eb12112573f9509",
      measurementId: "G-6E7LYDP0ML"
    };
    firebase.intializeApp(firebaseConfig );
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
