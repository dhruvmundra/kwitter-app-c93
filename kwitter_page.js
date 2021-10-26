var firebaseConfig = {
      apiKey: "AIzaSyDVVSPxUHwGjfNHtidcVu8Obpd66b0fFeQ",
      authDomain: "kwitter-93a5b.firebaseapp.com",
      databaseURL: "https://kwitter-93a5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-93a5b",
      storageBucket: "kwitter-93a5b.appspot.com",
      messagingSenderId: "622153470595",
      appId: "1:622153470595:web:3de540143e983df0ae41b6",
      measurementId: "G-GH5WEFG7BR"
    };
    firebase.initializeApp(firebaseConfig);

       user_name=localStorage.getItem("user_name");
       room_name=document.getElementById("room_name").value;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,like:0
      });
      document.getElementById("msg").value="";
}