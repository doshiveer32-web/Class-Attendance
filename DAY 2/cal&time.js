function clock()
{
    var d = new Date();

    document.getElementById("clock").innerHTML =
        d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

function calendar()
{
    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var today = d.getDate();

    var months = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];

    document.getElementById("monthYear").innerHTML =
        months[month] + " " + year;

    var first = new Date(year, month, 1).getDay();
    var days = new Date(year, month + 1, 0).getDate();

    var html = "";
    var date = 1;

    for (var i = 0; i < 6; i++)
    {
        html += "<tr>";

        for (var j = 0; j < 7; j++)
        {
            if (i == 0 && j < first)
            {
                html += "<td></td>";
            }
            else if (date <= days)
            {
                if (date == today)
                    html += "<td class='today'>" + date + "</td>";
                else
                    html += "<td>" + date + "</td>";

                date++;
            }
            else
            {
                html += "<td></td>";
            }
        }

        html += "</tr>";
    }

    document.getElementById("dates").innerHTML = html;
}

clock();
calendar();

setInterval(clock, 1000);