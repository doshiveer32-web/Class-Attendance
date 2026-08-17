function divide()
{
    var a = Number(prompt("Enter first number:"));
    var b = Number(prompt("Enter second number:"));

    try
    {
        if (b == 0)
        {
            throw "Cannot divide by zero";
        }

        var result = a / b;

        console.log("Result: " + result);
    }
    catch(error)
    {
        console.log("Error: " + error);
    }
}

divide();