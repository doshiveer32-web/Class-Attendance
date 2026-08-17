async function getUser() {

    var id = document.getElementById("userid").value;

    try {
        var response = await fetch("https://dummyjson.com/users/" + id);

        if (!response.ok) {
            throw new Error("User not found");
        }

        var user = await response.json();

        document.getElementById("result").innerHTML =
            "<h3>User Details</h3>" +
            "Name: " + user.firstName + " " + user.lastName + "<br>" +
            "Email: " + user.email + "<br>" +
            "Gender: " + user.gender + "<br>" +
            "Country: " + user.address.country + "<br>" +
            "Age: " + user.age + "<br>" +
            "Phone: " + user.phone;

    } catch (error) {
        document.getElementById("result").innerHTML =
            "User not found";
    }
}