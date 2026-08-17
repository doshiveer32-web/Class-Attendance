var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

xhr.onload = function() {
    if (xhr.status == 200) {

        var users = JSON.parse(xhr.responseText);

        users.sort(function(a, b) {
            return a.address.city.localeCompare(b.address.city);
        });

        var table = document.getElementById("userTable");

        for (var i = 0; i < users.length; i++) {

            var row = table.insertRow();

            row.insertCell(0).innerHTML = users[i].name;
            row.insertCell(1).innerHTML = users[i].email;
            row.insertCell(2).innerHTML = users[i].address.city;
            row.insertCell(3).innerHTML = users[i].company.name;
        }
    }
};

xhr.send();