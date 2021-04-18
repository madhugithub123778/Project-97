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

  userName = localStorage.getItem("yourname");
  roomName = localStorage.getItem("roomname");

  function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(roomName).push({
name: userName,
message: msg,
like: 0});
document.getElementById("msg").value= "";
  }

  function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data ['like'];
name_with_tag = "<h4> "+name+ "<img class='user_tick'src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+= row;
//End code
 } });  }); }
getData();

function updateLike(message_id){
console.log("Like button clicked: "+message_id);
button_id= message_id;
likes = document.getElementById(button_id).value;
update_like = Number(likes)+1;
console.log(update_like);

firebase.database().ref(roomName).child(message_id).update({
  like: update_like});
  
  }
  

function logout(){
  localStorage.removeItem("yourname");
  localStorage.removeItem("roomname");
  window.location.replace("index.html")
  }