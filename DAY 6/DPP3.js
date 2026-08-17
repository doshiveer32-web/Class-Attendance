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

// Generate new attendance every 3 seconds
setInterval(function () {

    let time = new Date();
    let currentTime = time.getHours() + ":" +
                      time.getMinutes() + ":" +
                      time.getSeconds();

    // Generate attendance value
    let value = Math.floor(Math.random() * 41) + 10;

    labels.push(currentTime);
    attendance.push(value);

    // Keep only latest 8 records
    if (labels.length > 8) {
        labels.shift();
        attendance.shift();
    }

    // Update chart
    chart.update();

}, 3000);