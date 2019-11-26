// Write your JavaScript code here.
// Remember to pay attention to page loading!

//initialize buttons
let takeoff = null;
let landing = null;
let missionAbort = null;

window.addEventListener("load", function() {
//reference buttons:
	takeoff = document.getElementById("takeoff")
	landing = document.getElementById("landing")
	missionAbort = document.getElementById("missionAbort")
//reference HTML id elements
	flightStatus = document.getElementById("flightStatus")
	shuttleBackground = document.getElementById("shuttleBackground ")
	rocket = document.getElementById("rocket")
	spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
	
//Take-off Button Clicked: confirmation window
	takeoff.onclick = function(){
		var confirmTakeoff = confirm("Confirm that the shuttle is ready for takeoff.")
		if(confirmTakeoff == false){}
		else{
			//flight status update to "Shuttle in flight" , background color update to blue , shuttle height increase by 10,000 miles
			flightstatus.innerHTML = "Shuttle in flight.";
		}
	}

//landing button clicked: 
	landing.onclick = function(){

	}

//abort button clicked:
	missionAbort.onclick = function(){
	
	}

};

