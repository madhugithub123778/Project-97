// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBti0V_xvzZ-MgXDz72tzKveIgidxyA-qs",
    authDomain: "project-kwitter-da2d3.firebaseapp.com",
    databaseURL: "https://project-kwitter-da2d3-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-da2d3",
    storageBucket: "project-kwitter-da2d3.appspot.com",
    messagingSenderId: "210473470722",
    appId: "1:210473470722:web:4ba07bf7eb95543297901b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("yourname");
document.getElementById("welcome_name").innerHTML="Welcome "+ user_name+ "!";

function addRoom(){
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"});
localStorage.setItem("roomname", room_name);
window.location="kwitter_chat.html";}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Names: "+ Room_names);
row= "<div class= 'names_of_rooms' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;
   //End code
   });});}
getData();

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='names_of_rooms' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}
getData();


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location = "kwitter_chat.html";}
  



function logout(){
    localStorage.removeItem("yourname");
    localStorage.removeItem("roomname");
    window.location.replace("index.html");
    
    
    }
    