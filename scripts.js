// Write your JavaScript code here.
// Remember to pay attention to page loading!

//Part 1
window.addEventListener("load", function() {
//Part 2

let shuttleImg = document.getElementById("rocket");
shuttleImg.style.position = "absolute";
shuttleImg.style.left = "0px";
shuttleImg.style.bottom = "0px";
let flightStatus = document.getElementById("flightStatus");
let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
let shuttleBackground = document.getElementById("shuttleBackground")

moveRight = this.document.getElementByName("Right");
moveRight.addEventListener("click", function(event){
    movement = parseInt(shuttleImg.style.left) + 10 + 'px';
    shuttleImg.style.left = movement;
});

moveLeft = this.document.getElementByName("Left");
moveLeft.addEventListener("click", function(event){
    movement = parseInt(shuttleImg.style.left) - 10 +'px';
    shuttleImg.style.left = movement;

});


moveDown = this.document.getElementByName("Down");
moveDown.addEventListener("click", function(event){
    movement = parseInt(shuttleImg.style.bottom) - 10 + 'px';
    shuttleImg.style.bottom = movement;
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;

}); 


let moveUp = this.document.getElementById("Up");
moveUp.addEventListener("click", function(event){  
     movement = parseInt(shuttleImg.style.bottom) + 10 + 'px';
     shuttleImg.style.bottom = movement;
     shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    });

//Part 3
    let takeoff = this.document.getElementById("takeoff");
    takeoff.addEventListener("click", function(event){
        response = confirm("Confirm that the shuttle is ready for takeoff");
        if(response){
          flightStatus.innerHTML = "Shuttle in flight.";
          shuttleBackground.style.backgroundColor = "blue";
          spaceShuttleHeight.innerHTML = String(10000);
        }

    });

//Part 4
let land = this.document.getElementById("landing");
landing.addEventListener("click", function(event){
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = String(0);
});

//Part 5
let abortMission = this.document.getElementById("missionAbort");
abortMission.addEventListener("click", function(event){
response = confirm("Confirm that you want to abort the mission.");
if(response){
    flightStatus.innerHTML = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = String(0);   
  }

 });


});

