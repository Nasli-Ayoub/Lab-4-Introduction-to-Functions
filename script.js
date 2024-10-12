function greet(name) {
    return "Hello" + name;
}
console.log(greet("Nasli"));

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 10));

let x = 10; // Global variable

function changeValue() {
    let x = 20; // Local variable
    console.log("Local x:", x);
}
changeValue();
console.log("Global x:", x);

function outerFunction() {
    let count = 0; // Declare local variable
    return function() {
        count++; // Increment local variable
        return count;
    };
}

const increment = outerFunction(); // Call outerFunction

console.log(increment()); // Outputs 1
console.log(increment()); // Outputs 2
console.log(increment()); // Outputs 3