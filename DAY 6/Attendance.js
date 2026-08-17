let labels = [];
let attendance = [];

let chart = new Chart(
    document.getElementById("attendanceChart"),
    {
        type: "bar",

        data: {
            labels: labels,
            datasets: [{
                label: "Number of Students Present",
                data: attendance
            }]
        },

        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
);

setInterval(function () {

    let time = new Date();
    let currentTime = time.getHours() + ":" +
                      time.getMinutes() + ":" +
                      time.getSeconds();

    let value = Math.floor(Math.random() * 41) + 10;

    labels.push(currentTime);
    attendance.push(value);

    if (labels.length > 8) {
        labels.shift();
        attendance.shift();
    }

    chart.update();

}, 3000);