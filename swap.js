function swap()
{
    var a = Number(prompt("Enter first number:"));
    var b = Number(prompt("Enter second number:"));

    console.log("Before swapping:");
    console.log("a = " + a);
    console.log("b = " + b);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log("After swapping:");
    console.log("a = " + a);
    console.log("b = " + b);
}

swap();