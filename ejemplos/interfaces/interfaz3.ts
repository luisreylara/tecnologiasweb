
interface Person {
  name: string;
  age: number;
  occupation?: string; // Optional property
  greet: (greeting: string) => string; // Method signature
}

const person1: Person = {
  name: "John Doe",
  age: 30,
  greet: (greeting: string) => `${greeting}, my name is John Doe`
};

const person2: Person = {
    name: "Jane Smith",
    age: 25,
    occupation: "Engineer",
    greet: (greeting: string) => `${greeting}, my name is Jane Smith`
};

console.log(person1.greet("Hello")); // Output: Hello, my name is John Doe
console.log(person2.greet("Hi")); // Output: Hi, my name is Jane Smith
