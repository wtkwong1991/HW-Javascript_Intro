// from data.js
var tableData = data;

// YOUR CODE HERE!


// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo activity data from data.js
console.log(tableData);


// Use d3 to update each cell's text with ufo activity report values (datetime, city, state, country, shape, durationMinutes, comments) 
tableData.forEach(function(activityReport) {
  console.log(activityReport);
  var row = tbody.append("tr");
  Object.entries(activityReport).forEach(function([key, value]) {
    console.log(key, value);
    
    // Append a cell to the row for each value
    // in the ufo activity report object
    //if () //check the keys here!!~!
    var cell = row.append("td");
    cell.text(value);
  });
});



// Select the submit button
var filter = d3.select("#filter-btn");

filter.on("click", function() {

  // Prevent the page from refreshing
    d3.event.preventDefault();

  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(activity => activity.datetime === inputValue);

    console.log(filteredData);



   // Use D3 to select the table body
    var tbody = d3.select("tbody");

   // Clear the table for filtered results
    tbody.html("");



 // Use d3 to add each cell's text with filtered report values (datetime, city, state, country, shape, durationMinutes, comments) 
    filteredData.forEach(function(activityReport) {
      console.log(activityReport);
      var row = tbody.append("tr");
      Object.entries(activityReport).forEach(function([key, value]) {
        console.log(key, value);
    
        // Append a cell to the row for each value
        // in the ufo activity report object
        //if () //check the keys here!!~!
        var cell = row.append("td");
        cell.text(value);
    });
 });

});