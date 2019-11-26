// Write your JavaScript code here.
// Remember to pay attention to page loading!

//add_sub_shuttleHeight:
let addHeight = function(htmlNumber) {
	let finalHeight = Number(htmlNumber);
	finalHeight += 10000;
	return String(finalHeight);
}

let subtractHeight= function(htmlNumber) {
	let finalHeight = Number(htmlNumber)-10000;
	return finalHeight;
}

//initialize buttons
let takeoff = null;
let landing = null;
let missionAbort = null;

window.addEventListener("load", function init () {
//reference buttons:
	takeoff = document.getElementById("takeoff")
	landing = document.getElementById("landing")
	missionAbort = document.getElementById("missionAbort")
//reference HTML id elements
	flightStatus = document.getElementById("flightStatus")
	shuttleBackground = document.getElementById("shuttleBackground")
	rocket = document.getElementById("rocket")
	spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
	
//Take-off Button Clicked: confirmation window
	takeoff.onclick = function(){
		var confirmTakeoff = confirm("Confirm that the shuttle is ready for takeoff.")
		if(confirmTakeoff == false){}
		else{
			//flight status update to "Shuttle in flight" , background color update to blue , shuttle height increase by 10,000 miles
			document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
			document.getElementById("shuttleBackground").style.backgroundColor = "blue";
			document.getElementById("spaceShuttleHeight").innerHTML = addHeight(document.getElementById("spaceShuttleHeight").innerHTML);
		}
	}

//landing button clicked: 
	landing.onclick = function(){
		var confirmLanding = alert("The shuttle is landing. Landing gear engaged.")
		if(confirmLanding == false){}
		else{
			//window alert, flight status, background to green
			document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
			document.getElementById("shuttleBackground").style.backgroundColor = "green";
			document.getElementById("spaceShuttleHeight").innerHTML = "0";
		}
	}

//abort button clicked:
	missionAbort.onclick = function(){
		var confirmAbort = confirm("Confirm that you want to abort the mission.")
		if(confirmAbort == false){}
		else{
			//flight status :mission aborted, background color to green, shuttle height to zero
			document.getElementById("flightStatus").innerHTML = "Mission aborted.";
			document.getElementById("shuttleBackground").style.backgroundColor = "green";
			document.getElementById("spaceShuttleHeight").innerHTML = "0";
		}
	}

//Up,down,left,right clicks:
	//STOPPED HERE.

});

