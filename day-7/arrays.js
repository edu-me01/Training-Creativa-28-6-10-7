var numbers = [1, 2, 3];
var doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

var ages = [15, 22, 17, 30];
var adults = ages.filter(age => age >= 18);
console.log(adults); // [22, 30]

var prices = [10, 20, 30];
var total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 60
