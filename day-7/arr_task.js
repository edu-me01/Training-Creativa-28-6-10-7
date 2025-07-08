var numbers = [5, 10, 15, 20];

// map
var doubled = numbers.map(n => n * 2);
// console.log(doubled); // [10, 20, 30, 40]

// filter
var greaterThan10 = numbers.filter(n => n > 10);
// console.log(greaterThan10); // [15, 20]

// reduce
var total = numbers.reduce((sum, n) => sum + n, 0);
// console.log(total); // 50