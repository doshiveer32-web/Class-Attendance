var employees = [];

fetch("https://dummyjson.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        employees = data.users.slice(3, 5);

        displayEmployees();
    });

function displayEmployees() {

    var output = "";

    for (var i = 0; i < employees.length; i++) {

        output += "<p>";
        output += "<b>Name:</b> " + employees[i].firstName + " " + employees[i].lastName + "<br>";
        output += "<b>Email:</b> " + employees[i].email + "<br>";
        output += "<b>Department:</b> " + employees[i].company.department;
        output += "</p><hr>";
    }

    document.getElementById("employeeData").innerHTML = output;
}

function sortEmployees() {

    employees.sort(function(a, b) {
        return a.firstName.localeCompare(b.firstName);
    });

    displayEmployees();
}