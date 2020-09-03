// from data.js
// Assign the data from `data.js` to a descriptive variable
var tableData = data;

//select table body
var tbody = d3.select("ufo-table")
console.log("welcome to the UFO sightings page...the truth is HERE!")
// // Loop Through `data` and console.log each UFO sighting object
// data.forEach(function(UFOSightings) {
//   console.log(UFOSightings);
// });

// // // Use d3 to append one table row `tr` for each UFO Sighting object
// data.forEach(function(UFOSightings) {
//   console.log(UFOSightings);
//   var row = tbody.append("tr");
// });

// // Use `Object.entries` to console.log each UFO sighting info
data.forEach(function(UFOSightings) {
  console.log(UFOSightings);
  var row = tbody.append("tr");

  Object.entries(UFOSightings).forEach(function([key, value]) {
    console.log(key, value);
  });
});

data.forEach((UFOSightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



// // // Select the form
// var form = d3.select("#form");
// var submit = d3.select("#filter-btn")

// submit.on("click", function(){

// })

// // // Create event handlers 
// filter-btn.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(UFOinfo);

//   var filteredData = UFOinfo.filter(UFOinfo => UFOinfo.datetime === inputValue);

//   console.log(filteredData);

