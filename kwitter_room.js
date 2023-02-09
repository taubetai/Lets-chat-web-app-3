
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCiZPDwbgc_fbNSlONWH95qeqcrZ8z0zzo",
      authDomain: "kwitter-4b6fb.firebaseapp.com",
      databaseURL: "https://kwitter-projects-981fa-default-rtdb.firebaseio.com/",
      projectId: "kwitter-4b6fb",
      storageBucket: "kwitter-4b6fb.appspot.com",
      messagingSenderId: "1086506223074",
      appId: "1:1086506223074:web:702957e32f8d4c350425bb",
      measurementId: "G-XZ9HR449CT"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
var get_name=localStorage.getItem("user_name",user_name);
concole.log(get_name);