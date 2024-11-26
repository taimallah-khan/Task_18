// Question 1: Square each element of an array using map
const number = [1, 2, 3, 4, 5];
const squaredNumbers = number.map((num) => num * num);
console.log(squaredNumbers);



// Question 2: Grade calculation using ternary operators
// function calculateGrade(score) {
//   return score >= 90
//     ? "A"
//     : score >= 80
//     ? "B"
//     : score >= 70
//     ? "C"
//     : score >= 60
//     ? "D"
//     : "F";
// }
// console.log(calculateGrade(85));



// Question 3: Car object, property modification, and destructuring
// const car = {
//   company: "Toyota",
//   model: "Camry",
//   year: 2023,
// };

// function changeYear(car, newYear) {
//   car.year = newYear;
// }
// changeYear(car, 2024);

// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`);




// Question 4: Filter prime numbers from an array
// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
// const primeNumbers = numbers.filter(isPrime);
// console.log(primeNumbers);



// Question 5: Use cases of map, filter, and reduce
// map: Transforming elements of an array into a new array
// Example: Squaring numbers, converting strings to uppercase, etc.

// filter: Creating a new array with elements that meet a certain condition
// Example: Filtering even numbers, selecting users older than 18, etc.

// reduce: Combining elements of an array into a single value
// Example: Calculating the sum of numbers, finding the maximum value, etc.



// Question 6: Asynchronous data fetching using async/await
// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// fetchData();




// Question 7: Nested object and optional chaining
// const person = {
//   name: "Alice",
//   address: {
//     street: "Main Street",
//     city: "Anytown",
//   },
// };

// const phoneNumber = person.contact?.phone;
// console.log(phoneNumber || "Phone number not found");
