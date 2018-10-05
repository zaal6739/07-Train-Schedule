$(document).ready(function () {
  //initialize firebase
  var config = {
    apiKey: "AIzaSyDTSO19CMJuHbzVeQM_97r2tMbEcX6atnU",
   authDomain: "trainscheduler-d471e.firebaseapp.com",
    databaseURL: "https://trainscheduler-d471e.firebaseio.com",
    projectId: "trainscheduler-d471e",
    storageBucket: "trainscheduler-d471e.appspot.com",
     messagingSenderId: '247427046990'
   };
   firebase.initializeApp(config);
// set the variable to firebase for future reference
   var database = firebase.database();
  //  var data = new firebase('https://trainscheduler-d471e.firebaseio.com/');

  // function for submitting new train data

  $('#submitNewTrain').on('click',function(){
// hold user inputs in variables
  var train = $('#inputTrainName').val().trim();
  var destination = $('inputDestination').val().trim();
  var frequency = $('inputFrequency').val().trim();
  var arrival = moment($('inputArrival').val().trim(),'hh:mm').subtract(10,'years').format('X');
  // var minutesAway = $('inputMinutes').val().trim();

  var userTrain = {
                  TrainName: train,  Dest: destination
                  ,  Freq: frequency, NextArrival:arrival
                  , MinutesAway: MinutesAway
                  };

  console.log(train);
  console.log(destination);
  console.log(frequency);
  console.log(arrival);
  // console.log(minutesAway);

// push user inputs to the database
  database.ref().push(userTrain);
  
//clear user input fields
  $('inputTrainName').val("")
  $('inputDestination').val("")
  $('inputFrequency').val("")
  $('inputArrival').val("")


  });



});
