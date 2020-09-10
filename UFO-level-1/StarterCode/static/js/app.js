// from data.js
// Assign the data from `data.js` to a descriptive variable
var tableData = data;

//Select the body
var tbody = d3.select("tbody")
//Select the button 
var submit = d3.select("#filter-btn")
console.log("welcome to the UFO sightings page...the truth is HERE!")

// create event handlersloop through table using object entries

var filter = d3.select("#filter-btn");
tableData.forEach((UFOSightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
filter.on("click", function(){
    d3.event.preventDefault();
    var select_date_time = d3.select("#datetime").property("value");  
    console.log(select_date_time)  
    
tbody.html("")
    var filteredData = tableData.filter(UFOSightings => UFOSightings.datetime === select_date_time);
    filteredData.forEach((UFOSightings) => {
        var row = tbody.append("tr");
        Object.entries(UFOSightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
});
