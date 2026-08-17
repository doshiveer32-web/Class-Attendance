function largest(arr)
{
    var max = arr[0];

    for (var i = 1; i < arr.length; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }

    return max;
}

var numbers = [10, 25, 5, 40, 15];

var result = largest(numbers);

console.log("Largest number is: " + result);