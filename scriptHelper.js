// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = documet.getElementById("missionTarget");
   document = missionTarget
   document.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    let testNumber = Number(testInput);
    if(testInput === ''){
        return "Empty";
    }else if(isNaN(testNumber)){
        return "Not a Number";
    }else if(!isNaN(testNumber)){
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let launchStatus = document.getElementById('launchStatus');
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let validPilot = validateInput(pilot);
   let validCopilot = validateInput(copilot);
   let validFuelLevel = validateInput(fuelLevel);
   let validCargoLevel = validateInput(cargoLevel);
   if(validPilot === "Empty" || validCopilot  === "Empty" || validFuelLevel === "Empty" || validCargoLevel === "Empty"){
    alert("All fields are required!");
   }else if(validPilot === "Is a Number" || validCopilot === "Is a Number" || validCargoLevel === "Not a Number" || validFuelLevel === "Not a Number"){
    alert("Please input valid information for each field");
   }else if(Number(fuelLevel) < 10000){
    list.style.visibility = 'visible';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = 'Fuel level too low for launch';
    launchStatus.innerHTML = 'Shuttle not ready for launch';
    launchStatus.style.color = "red";
   }else if(Number(cargoLevel) > 10000){
    list.style.visibility = 'visible';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
    launchStatus.innerHTML = 'Shuttle not ready for launch';
    launchStatus.style.color = "red";
   }else if(Number(fuelLevel) > 10000 && Number(cargoLevel) < 10000){
    list.style.visibility = 'visible';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    launchStatus.innerHTML = 'Shuttle ready for launch';
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    launchStatus.style.color = "green";
   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetPicked = Math.floor(Math.random() * planets.length);
    return planets[planetPicked];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
