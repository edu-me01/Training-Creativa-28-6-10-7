class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
}

var instructor_1 = new Person('ahmed');
var instructor_2 = new Student('ali', 2);

console.log(instructor_1.greet());
console.log(instructor_2.level , instructor_2.greet());


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  display() {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}

const item = new Product("T-shirt", 30);
console.log(item.display());