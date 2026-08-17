let marks = [78, 45, 89, 67, 92, 56, 81, 73];

console.log("Original Array:");
console.log(marks);

marks.sort(function(a, b)
{
    return a - b;
});

console.log("After Sorting:");
console.log(marks);

let highest = marks.slice(5, 8);

console.log("Three Highest Marks:");
console.log(highest);

marks.splice(0, 2, 60, 65);

console.log("After Splice:");
console.log(marks);

marks.reverse();

console.log("After Reverse:");
console.log(marks);