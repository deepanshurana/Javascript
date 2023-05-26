// // var, let and const
// function example() {
//   var a = 1; // Function-scoped variable
//   let b = 2; // Block-scoped variable
//   const c = 3; // Block-scoped constant

//   if (true) {
//     var a = 10; // Redeclaration and reassignment is allowed with var
//     let b = 5; // Block-scoped variable with a different value
//     const c = 6; // Block-scoped constant with a different value

//     console.log(a); // Output: 4
//     console.log(b); // Output: 5
//     console.log(c); // Output: 6
//   }

//   console.log(a); // Output: 4 (var is function-scoped)
//   console.log(b); // Output: 2 (let retains its value outside the block)
//   console.log(c); // Output: 3 (const retains its value outside the block)
//   return "Dene";
// }
// const normalFunction = example;
// const arrowFunction = (a, b) => a + b;
// console.log(`${normalFunction()} and ${arrowFunction(1, 2)}`);

// const person = () => {
//   this.a = "AAAAAA";
//   return {
//     name: "Deepanshu",
//     bind: this,
//   };
// };

// const array = {
//   name: "Deepanshu",
//   age: 30,
//   greet: () => {
//     console.log(this.name);
//   },
// };̦
// console.log(person());

// a = [1, 2, 3, 4, 5];
// k = {
//   name: "deepanshu",
//   address: {
//     city: "Nurpur",
//   },
//   nums: [1, 2, 3, 4, 5],
// };

// unpack(a, k);
// function unpack([...a], { ...k }) {

// }

// const obj = {
//   name: "Deepanshu",
//   age: 27,
//   greet() {
//     console.log(`Hello from ${this.name}`);
//   },
// };
// obj.greet();

/*methods:
.push(), pop, shift(), unshift, concat, 
join, slice, splice, map, filter, reduce, reduceRight, 
forEach, includes, find, findIndex,sort()
*/

// a = [10, 2, 3, 0
// b = [4, 5, 6];
// t = a.sort((a, b) => a - b);
// console.log(t);

// for (let [i, v] of a.entries()) {
//   console.log(i, v);
// }

// this function is for (min, max)[Exclusive], for [min, max] remove do-while and return as it is.

function getRandomSuccess() {
    let min = 0;
    let max = 1;
    let result;
    do {
        result = Math.random() * (max - min) + min;
    } while (result == min || result == max);
    return result;
}

let carRepair = new Promise((resolve, reject) => {
    let successRate = getRandomSuccess() > 0.5;
    console.log(successRate);
    setTimeout(() => {
        if (successRate) {
            resolve("Car has been repaired");
        } else {
            reject("Oops!. the work is still going on!");
        }
    }, 2000);
});

carRepair
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

console.log(carRepair);
