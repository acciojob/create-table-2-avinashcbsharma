function createTable() {

    var numRows = prompt("Input number of rows");
    
   
    var numCols = prompt("Input number of columns");

   
    if (isNaN(numRows) || isNaN(numCols)) {
        alert("Please enter valid numbers for rows and columns.");
        return;
    }

   
    numRows = parseInt(numRows);
    numCols = parseInt(numCols);

  
    var table = document.getElementById("myTable");

   
    table.innerHTML = "";

  
    for (var i = 0; i < numRows; i++) {
        var row = table.insertRow(i);

        for (var j = 0; j < numCols; j++) {
            var cell = row.insertCell(j);

            // Set the text content of each cell
            cell.textContent = "Row-" + i + " Column-" + j;
        }
    }  
}
