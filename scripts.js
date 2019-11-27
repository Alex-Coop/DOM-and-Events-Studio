window.addEventListener("load", function init(){
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

//reference Buttons
	let takeoff = null;
	let landing = null;
	let missionAbort = null;
	let rocketPosition = null;
	let upButton = null;
	let downButton = null;
	let leftButton = null;
	let rightButton = null;
//reference Elements
	takeoff = document.getElementById("takeoff")
	landing = document.getElementById("landing")
	missionAbort = document.getElementById("missionAbort")
	upButton = document.getElementById("up")
	downButton = document.getElementById("down")
	leftButton = document.getElementById("left")
	rightButton = document.getElementById("right")
	
	flightStatus = document.getElementById("flightStatus")
	shuttleBackground = document.getElementById("shuttleBackground")
	rocket = document.getElementById("rocket")
	spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
	rocketPosition = 0;

//takeoff button click
	takeoff.onclick = function(){
		var confirmTakeoff = confirm("Confirm that the shuttle is ready for takeoff.")
		if(confirmTakeoff == false){}
		else{
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
			document.getElementById("flightStatus").innerHTML = "Mission aborted.";
			document.getElementById("shuttleBackground").style.backgroundColor = "green";
			document.getElementById("spaceShuttleHeight").innerHTML = "0";
		}
	}

//Up,Down,Left,Right Button click listeners:
	upButton.addEventListener("click",function(){
		rocketPosition += 10;
		shuttleBackground.style.bottom = rocketPosition + "px";
		spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
	})
	downButton.addEventListener("click",function(){

		if(spaceShuttleHeight.innerHTML <=0){
		
		}else{
			rocketPosition -= 10;
			shuttleBackground.style.bottom = rocketPosition + "px";
			spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;};
	})
	leftButton.addEventListener("click",function(){
		rocketPosition -= 10;
		shuttleBackground.style.left = rocketPosition + "px";
	})
	rightButton.addEventListener("click",function(){
		rocketPosition += 10;
		shuttleBackground.style.left = rocketPosition + "px";
	})


});