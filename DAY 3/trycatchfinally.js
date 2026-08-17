try
{
    var num = Number(prompt("Enter a number:"));

    if (num < 0)
    {
        throw "Number cannot be negative";
    }

    var result = Math.sqrt(num);
    console.log("Square root = " + result);
}
catch(error)
{
    console.log("Error: " + error);
}
finally
{
    console.log("Calculation completed");
}