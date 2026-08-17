var users = [];

var ajax = new XMLHttpRequest();

ajax.open("GET", "https://jsonplaceholder.typicode.com/users", true);

ajax.onload = function() {

    if (ajax.status == 200) {

        users = JSON.parse(ajax.responseText);

        displayUsers(users);
    }
};

ajax.send();


function searchUser() {

    var searchText = document.getElementById("search").value.toLowerCase();

    var filteredUsers = [];

    for (var i = 0; i < users.length; i++) {

        if (users[i].name.toLowerCase().includes(searchText)) {
            filteredUsers.push(users[i]);
        }
    }

    displayUsers(filteredUsers);
}


function displayUsers(data) {

    var output = "<table>";

    output += "<tr>";
    output += "<th>ID</th>";
    output += "<th>Name</th>";
    output += "<th>Email</th>";
    output += "<th>City</th>";
    output += "</tr>";

    for (var i = 0; i < data.length; i++) {

        output += "<tr>";
        output += "<td>" + data[i].id + "</td>";
        output += "<td>" + data[i].name + "</td>";
        output += "<td>" + data[i].email + "</td>";
        output += "<td>" + data[i].address.city + "</td>";
        output += "</tr>";
    }

    output += "</table>";

    document.getElementById("result").innerHTML = output;
}