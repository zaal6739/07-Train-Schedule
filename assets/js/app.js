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
  var destination = $('#inputDestination').val().trim();
  var frequency = $('#inputFrequency').val().trim();
  var arrival = moment($('#inputArrival').val().trim(), 'HH:mm').subtract(1,'years');
  // var minutesAway = $('inputMinutes').val().trim();

  var userTrain = {
                  TrainName: train,  Dest: destination
                  ,  Freq: frequency, NextArrival:arrival
                  };

  console.log(train);
  console.log(destination);
  console.log(frequency);
  console.log(arrival);
  // console.log(minutesAway);

// push user inputs to the database
  database.ref().push(userTrain);

//clear user input fields
  $('#inputTrainName').val("")
  $('#inputDestination').val("")
  $('#inputFrequency').val("")
  $('#inputArrival').val("")

  });

database.ref().on("child_added", function (childSnapshot) {

var ftrain = childSnapshot.val().TrainName;
var fdestination = childSnapshot.val().Dest;
var ffreq = childSnapshot.val().Freq;
var farrival = childSnapshot.val().NextArrival;


		var modulus = moment().diff(moment.unix(farrival), "minutes") % ffreq ;
		var minutesLeft = ffreq - modulus;

	

console.log(ftrain);
console.log(fdestination);
console.log(ffreq);
console.log(farrival);

$('#timeTable').append('<tr><td>'
+ftrain+'</td><td>'
+fdestination+'</td><td>'
+ffreq+'</td><td>'
+farrival+'</td><td>'
+minutesLeft+'</td></tr>');

})

});
