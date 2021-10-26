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
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(
      function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name"+Room_names);
      row="<div class='room_name ' id="+Room_names+" onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}