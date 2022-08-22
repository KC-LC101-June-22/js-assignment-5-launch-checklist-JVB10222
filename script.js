// Write your JavaScript code here!
window.addEventListener("load", function() {
   const form = document.querySelector("form");
   let list = document.getElementById("faultyItems");
   list.style.visibility = 'hidden';
   form.addEventListener("submit", function(event){
      event.preventDefault()
      let queryPilot = document.querySelector("input[name=pilotName]");
      let pilot = queryPilot.value;
      let queryCopilot = document.querySelector("input[name=copilotName]");
      let copilot = queryCopilot.value;
      let queryFuelLevel = document.querySelector("input[name=fuelLevel]");
      let fuelLevel = queryFuelLevel.value;
      let queryCargoLevel = document.querySelector("input[name=cargoMass]");
      let cargoLevel = queryCargoLevel.value;
      // list = document.getElementById("faultyItems");
      formSubmission(document, list, pilot,copilot,fuelLevel, cargoLevel);
   }); 
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let imageUrl = planet.image;
       let moons = planet.moons;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
   })
});