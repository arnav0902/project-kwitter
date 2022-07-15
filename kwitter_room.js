var firebaseConfig = {
      apiKey: "AIzaSyDBqxKTgEo9ISe2t2PAYrCxvKpriT6f8KM",
      authDomain: "kwitter-2-f4bd4.firebaseapp.com",
      databaseURL: "https://kwitter-2-f4bd4-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-f4bd4",
      storageBucket: "kwitter-2-f4bd4.appspot.com",
      messagingSenderId: "18539244703",
      appId: "1:18539244703:web:64eab0a5d1c4ab575086aa"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome " + user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding User"
        });
        localStorage.setItem("room_name",room_name);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name- " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
      document.getElementById("output").innerHTML +=row ;
      });});}
getData();
function redirectToRoomName(name) { 
      console.log(name);
       localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}





function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

      
}