function generateUsername()
{
    var name = prompt("Enter your full name:");

    name = name.trim();

    name = name.toLowerCase();
    
    var names = name.split(" ");

    var firstName = names[0].slice(0, 3);

    var lastName = names[names.length - 1];

    var username = firstName + lastName;

    if (username.includes(" "))
    {
        username = username.replaceAll(" ", "");
    }

    console.log("Username: " + username);
    console.log("Length: " + username.length);
    console.log("Contains spaces: " + username.includes(" "));
}

generateUsername();