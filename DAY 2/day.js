function showDay()
{
    var date = new Date();

    var day = date.getDay();

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    document.getElementById("result").innerHTML = days[day];
}

showDay();