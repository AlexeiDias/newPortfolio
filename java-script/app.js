var firebaseConfig = {
    apiKey: "AIzaSyAAAPRsS6JnfsWK-Fhz4ioHxP5zRNIvBfQ",
    authDomain: "alexei-930cb.firebaseapp.com",
    databaseURL: "https://alexei-930cb.firebaseio.com",
    projectId: "alexei-930cb",
    storageBucket: "",
    messagingSenderId: "856201311867",
    appId: "1:856201311867:web:0c4f145a7cf5526f6854de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Create a variable to reference the database
  var database = firebase.database();
  
  // Use the below initialValue
  var initialValue = 0;
  
  // Use the below variable clickCounter to keep track of the clicks.
  var visitCounter = initialValue;
  
  // --------------------------------------------------------------
  
  // At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
  // This callback keeps the page updated when a value changes in firebase.
  database.ref().on("value", function(snapshot) {
    // We are now inside our .on function...
  
    // Console.log the "snapshot" value (a point-in-time representation of the database)
    console.log(snapshot.val());
    // This "snapshot" allows the page to get the most current values in firebase.
  
    // Change the value of our clickCounter to match the value in the database
    visitCounter = snapshot.val().visitCounter;
   
  
    // Console Log the value of the clickCounter
    console.log(visitCounter);
  
    // Change the HTML using jQuery to reflect the updated clickCounter value
    $("#visit-counter").text(visitCounter);
    // Alternate solution to the above line
    // $("#click-value").html(clickCounter);
  
  // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  
  // --------------------------------------------------------------
  
  const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
    
exports.hitCounter = functions.https.onRequest((req, res) => {
    const counterRef = admin.database().ref("/hit_counter");
    return counterRef
        .transaction(current => {
        return (current || 0) + 1;
        })
        console.log(current);
        console.log(this.hitCounter);
  });



  // Whenever a user clicks the click button
//   $("#click-button").on("click", function() {
  
    // Reduce the clickCounter by 1
    // clickCounter--;
  
    // Alert User and reset the counter
    // if (clickCounter === 0) {
    //   alert("Phew! You made it! That sure was a lot of clicking.");
    //   clickCounter = initialValue;
    // }
  
    // Save new value to Firebase
    // database.ref().set({
    //   clickCount: clickCounter
    // });
  
    // Log the value of clickCounter
    // console.log(clickCounter);
  
//   });
  
  // Whenever a user clicks the restart button
//   $("#restart-button").on("click", function() {
  
    // Set the clickCounter back to initialValue
    // clickCounter = initialValue;
  
    // Save new value to Firebase
    // database.ref().set({
    //   /clickCount: clickCounter
//    / });
  
    // Log the value of clickCounter
    // console.log(clickCounter);
  
    // Change the HTML Values
    // $("#click-value").text(clickCounter);
  
//   });