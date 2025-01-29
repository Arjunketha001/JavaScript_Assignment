// Problem 1: Arrow function to calculate square
const square = (num) => num * num;
console.log(`Square of 5:`, square(5));

// Problem 2: Function to generate personalized greeting
function generateGreeting(name) {
    return `Hello, ${name}! Welcome!`;
}
console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob"));
console.log(generateGreeting("Charlie"));

// Problem 3: IIFE to calculate square
(function(num) {
    console.log(`Square of 6:`, num * num);
})(6);

// Problem 4: Closure for tax calculation function
function calculateTax() {
    return function(income) {
        if (income <= 50000) return income * 0.1;
        if (income <= 100000) return income * 0.2;
        return income * 0.3;
    };
}
const taxCalculator = calculateTax();
console.log(`Tax for 40000:`, taxCalculator(40000));
console.log(`Tax for 75000:`, taxCalculator(75000));
console.log(`Tax for 120000:`, taxCalculator(120000));

// Problem 5: Recursive function to calculate factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(`Factorial of 5:`, factorial(5));
console.log(`Factorial of 7:`, factorial(7));

// Problem 6: Curry function implementation
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    };
}
const add = (a, b) => a + b;
const curriedAdd = curry(add);
console.log(`Curried Addition:`, curriedAdd(5)(3));
