function validate()
{
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;

    if (name == "" || mobile == "" || email == "")
    {
        document.getElementById("message").innerHTML = "Please fill all fields";
        return false;
    }

    if (!isNaN(name))
    {
        document.getElementById("message").innerHTML = "Name cannot contain numbers";
        return false;
    }

    if (isNaN(mobile) || mobile.length != 10)
    {
        document.getElementById("message").innerHTML =
            "Mobile number must contain 10 digits";
        return false;
    }

    if (email.indexOf("@") == -1)
    {
        document.getElementById("message").innerHTML =
            "Enter a valid email ID";
        return false;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);

    document.getElementById("message").innerHTML =
        "Data saved successfully";

    return false;
}


function viewData()
{
    var name = localStorage.getItem("name");
    var mobile = localStorage.getItem("mobile");
    var email = localStorage.getItem("email");

    if (name == null)
    {
        document.getElementById("message").innerHTML =
            "No saved data found";
    }
    else
    {
        document.getElementById("message").innerHTML =
            "Name: " + name + "<br>" +
            "Mobile Number: " + mobile + "<br>" +
            "Email ID: " + email;
    }
}


function clearData()
{
    localStorage.clear();

    document.getElementById("message").innerHTML =
        "Saved data cleared";
}