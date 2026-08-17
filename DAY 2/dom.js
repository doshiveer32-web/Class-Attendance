function changeText()
{
    document.getElementById("para").innerHTML = "My name is Veer.";
}

function changeStyle()
{
    document.getElementById("para").style.fontSize = "25px";
    document.getElementById("para").style.backgroundColor = "yellow";
}

function reset()
{
    document.getElementById("para").innerHTML = "This is the original paragraph.";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("para").style.backgroundColor = "white";
}