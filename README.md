
**Q:Object.assign(). Shallow Copy vs deep copy**

Object.assign() is like a librarian that takes all the books (properties) from one or more shelves (source objects) and puts them on another shelf (target object). If there's already a book with the same name on the target shelf, the librarian replaces it with the new one.

The Object.assign() method does a shallow copy. This means that it copies the values of the properties from the source objects to the target object. If a property value is a reference to an object, it copies the reference, not the actual object. So, the source and the target will both have a reference to the same object.

Here's an example:

```javascript
let original = { a: 1, b: { c: 3 } };  // original object
let copy = Object.assign({}, original);  // copy using Object.assign()

console.log(copy);  // outputs: { a: 1, b: { c: 3 } }

// now let's change the value in the 'copy' object
copy.a = 10;
copy.b.c = 30;
console.log(original);  // outputs: { a: 1, b: { c: 30 } }
console.log(copy);  // outputs: { a: 10, b: { c: 30 } }
```

In this example, when we change the value of copy.a, it doesn't affect original.a because a is a simple value (not a reference to an object). But when we change copy.b.c, it does affect original.b.c because b is an object, and Object.assign() only copied the reference to the b object, not the actual b object itself.

If you want to make a deep copy (a completely separate copy that doesn't share any references with the original), you would need to use a different method, like JSON serialization (JSON.parse(JSON.stringify(original))).







**Q: How to make objects immutable? Shallow Freezing vs Deep Freezing.**

In JavaScript, you can use the Object.freeze() function to make an object immutable, which means that its properties can't be changed, new properties can't be added, and existing properties can't be removed.

```javascript
let obj = { name: "John", age: 30 };

Object.freeze(obj);

// Attempt to change a property
obj.name = "Jane"; // This won't have any effect

console.log(obj.name); // Outputs: "John"


```
In this example, even though we tried to change obj.name to "Jane", the value remained "John" because we had frozen the object.

However, **Object.freeze() only works on the top level of the object**. If the object contains other objects, like arrays or other object literals, those can still be modified unless they are also frozen.

For deep freezing, you might have to write a function that recursively freezes every object:

```javascript
function deepFreeze(obj) {
  let propNames = Object.getOwnPropertyNames(obj);
  for (let name of propNames) {
    let value = obj[name];
    if (value && typeof value === "object") { 
      deepFreeze(value);
    }
  }
  return Object.freeze(obj);
}

let obj2 = { innerObj: { name: "John" } };
deepFreeze(obj2);
obj2.innerObj.name = "Jane"; // This won't have any effect
console.log(obj2.innerObj.name); // Outputs: "John"

```

**Remember that freezing an object is not always necessary and it can have performance implications. You should only freeze objects when you need to ensure they do not get changed.**


**Q: Primitive and Reference types in js with example.**

Primitive types in JavaScript are like simple, standalone toys. You've got balls (numbers), blocks with letters on them (strings), two-sided coins with "true" on one side and "false" on the other (booleans), plus a few special toys: an empty box (null), and a toy still wrapped up because we don't know what it is yet (undefined).

```javascript
let myBall = 5;  // Number
let myBlock = "a";  // String
let myCoin = true;  // Boolean
let myBox = null;  // Null
let myMysteryToy = undefined;  // Undefined

```

Each of these toys is its own thing. If you get another ball and paint it a different color, it doesn't change the first ball. This is like how primitive types in JavaScript are immutable, which means they can't be changed. If you want to change a primitive value, you actually create a new value.

```javascript
let ball1 = 5;  
let ball2 = ball1;  // Now you have two balls, each with the value 5.
ball2 = 10;  // You paint one of the balls a different color. 
console.log(ball1);  // But the first ball is still the same: it outputs 5.

```

Now, reference types are like toy boxes or toy sets. These are objects, arrays, and functions. An object could be a box of different toys (properties), an array is like a tray that holds multiple toys in order (elements), and a function is like a toy machine that does something with your toys (performs actions).

```javascript
let myBoxOfToys = { ball: "red", block: "a" };  // Object
let myTray = ["red ball", "a block", "true coin"];  // Array
let myToyMachine = function(toy) {  // Function
  console.log("This machine sees your " + toy);
};
```
With these toy boxes and toy sets, if you let a friend play with one and they change something, it changes your box or set too, because they're actually playing with the same one, not a copy. This is like how reference types in JavaScript point to the same object in memory.

```javascript
let box1 = { ball: "red" };
let box2 = box1;  // Now both box1 and box2 are pointing to the same box.
box2.ball = "blue";  // Your friend paints the ball in the box blue.
console.log(box1.ball);  // It changes your view of the box too: it outputs "blue".

```
So, think of primitive types like standalone toys, and reference types like toy boxes or toy sets that all point to the same thing.



**Q: Spread and Rest Operators in JS.**
Imagine you have a box full of cookies, and this box is like an array in JavaScript.

**Spread Operator (`...`):**

The spread operator is like taking out all the cookies from the box and spreading them out on the table. Each cookie is now separate and can be used individually. For example, you can spread out the cookies from your box to share them with your friends:

```javascript
let myBox = ["chocolate chip", "oatmeal raisin", "gingerbread"];
let table = [...myBox, "sugar", "peanut butter"]; 
console.log(table); // prints ["chocolate chip", "oatmeal raisin", "gingerbread", "sugar", "peanut butter"]
```

In this example, `...myBox` takes all the cookies out of "myBox" and spreads them out into the "table" array.

**Rest Operator (`...`):**

The rest operator is the opposite. Let's say your mom made a fresh batch of different cookies and put them all on the table. You want to put some of them in your box. You can use the rest operator to gather up rest of the cookies from the table into your box:

```javascript
let [myCookie, ...remainingCookies] = ["chocolate chip", "oatmeal raisin", "gingerbread", "sugar", "peanut butter"];
```

In this example, `myCookie` is the first cookie on the table ("chocolate chip") and `...remainingCookies` gathers up all the remaining cookies into an array. So, `remainingCookies` will be `["oatmeal raisin", "gingerbread", "sugar", "peanut butter"]`.

So the spread operator is like spreading out cookies from a box onto a table, and the rest operator is like gathering up cookies from the table into a box. And that's how you can think of the spread and rest operators in JavaScript!


**But what about changing the myBox array? will it tamper the table array as well?**
No, it will not. When you spread an array (like the cookies in `myBox`) into a new array (like `table`), you're actually creating a shallow copy of the original array. 

This means that changes to the original array (`myBox`) after the spread operation will not affect the new array (`table`). Similarly, changes to the new array won't affect the original one.

Here's an example:

```javascript
let myBox = ["chocolate chip", "oatmeal raisin", "gingerbread"];
let table = [...myBox, "sugar", "peanut butter"]; 

// Let's add a new cookie to myBox:
myBox.push("snickerdoodle");

console.log(myBox); // prints ["chocolate chip", "oatmeal raisin", "gingerbread", "snickerdoodle"]
console.log(table); // prints ["chocolate chip", "oatmeal raisin", "gingerbread", "sugar", "peanut butter"]
```

As you can see, the "snickerdoodle" cookie was added to `myBox`, but `table` stayed the same.

It's important to note that the spread operator makes a shallow copy, not a deep copy. That means if the array you're copying has objects (like boxes of cookies) and you change a property of one of those objects, that change will show up in both the original and the copied array, because objects in JavaScript are reference types.



**Spread Parameters and Rest Parameters in function arguments.**
JavaScript has similar concepts to Python's `*args` and `**kwargs`, but they are used slightly differently. JavaScript uses the "rest" parameters syntax (`...`) to capture an indefinite number of arguments into an array, similar to Python's `*args`. Additionally, JavaScript uses "spread" syntax (`...`) to spread an object's properties, which is similar to Python's `**kwargs`.

Here is how you can use these in JavaScript:

**1. Rest parameters (like `*args` in Python):**

In JavaScript, you can use the rest parameter syntax (`...`) in a function definition to gather arguments into an array:

```javascript
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));  // Outputs: 10
```

In this example, `...args` is similar to `*args` in Python. It captures all the arguments passed to the function into an array named `args`.

**2. Spread syntax (like `**kwargs` in Python):**

In JavaScript, you can use the spread syntax (`...`) to spread the properties of an object:

```javascript
let kwargs = {a: 1, b: 2, c: 3};
let copy = {...kwargs};
console.log(copy);  // Outputs: { a: 1, b: 2, c: 3 }
```

In this example, `...kwargs` is similar to `**kwargs` in Python. It spreads the properties of the `kwargs` object into a new object named `copy`.

However, unlike Python's `**kwargs`, JavaScript does not have a built-in way to automatically collect function arguments into an object. If you want to pass an object to a function and then access its properties, you'd typically just pass the object directly and use dot notation or bracket notation to access the properties:

**This is also called Destructuring**. (Unpacking of elements from objects, arrays)

```javascript
function greet({name, age}) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

let person = {name: "Alice", age: 25};
greet(person);  // Outputs: "Hello, Alice! You are 25 years old."
```

In this example, `person` is an object that is passed to the `greet` function, which destructures it in the parameter list to access the `name` and `age` properties. This is a common pattern when working with objects in JavaScript.




**Destructuring in JS**
Imagine your lunch box as an object:

```javascript
let lunchBox = {
    sandwich: "Peanut Butter and Jelly",
    fruit: "Apple",
    drink: "Juice box"
};
```

When lunch time comes, you want to take each item out of your lunch box. You could do it one by one, like this:

```javascript
let sandwich = lunchBox.sandwich;
let fruit = lunchBox.fruit;
let drink = lunchBox.drink;
```

But that can be a bit slow, right? Wouldn't it be nicer if you could just open your lunch box and take everything out all at once? That's what destructuring lets you do!

Here's how you can do it with destructuring in JavaScript:

```javascript
let { sandwich, fruit, drink } = lunchBox;
```

And that's it! You've taken everything out of your lunch box all at once. Now the variables `sandwich`, `fruit`, and `drink` have the values from the corresponding properties in your lunch box.

It's just like saying "I know I have a sandwich, some fruit, and a drink in my lunch box. I'll take all of them out and put them on the table."

**You can't assign new names in {} for objects.**

You can also do this with arrays. Imagine you have a line of toy cars:

```javascript
let toyCars = ["red car", "blue car", "green car"];
```

And you want to take the cars out of the line. You could do it one by one, like this:

```javascript
let firstCar = toyCars[0];
let secondCar = toyCars[1];
let thirdCar = toyCars[2];
```

But with destructuring, you can take them all out at once:

```javascript
let [firstCar, secondCar, thirdCar] = toyCars;
```
**You can assign new names in [] for arrays.**

And now `firstCar`, `secondCar`, and `thirdCar` have the values from the corresponding elements in your toy cars line. It's just like saying "I know I have a red car, a blue car, and a green car in my line of cars. I'll take all of them out and put them on the floor."

So, destructuring is like unpacking your lunch box or a line of toy cars. It lets you take things out all at once instead of one at a time.




Q: Promises, Async/Await in JS.
Let's imagine you're at a magic show. The magician is about to perform a magic trick. He says "Abracadabra" and puts a rabbit into a hat. He says that the rabbit will disappear after a while.

This magic trick is like a Promise in JavaScript. A Promise is like saying "I promise that something will happen in the future". Just like the magician's promise that the rabbit will disappear.

Here's an example of a Promise in JavaScript:

```javascript
function getRandomSuccess() {
  let min = 0;
  let max = 1;
  let result;
  do {
    result = Math.random() * (max - min) + min;
  } while (result == min || result == max);
  return result;
}

let magicTrick = new Promise((resolve, reject) => {
    let success = getRandomSuccess() > 0.5;  // trick works 50% of the time

    setTimeout(() => {
        if (success) {
            resolve('Rabbit has disappeared!');
        } else {
            reject('Oops, the trick failed. The rabbit is still here.');
        }
    }, 3000);
});

```

In this code, `magicTrick` is a Promise that something will happen in 3 seconds. The `resolve` function is like the magician announcing "Rabbit has disappeared!" after the trick is complete.

But what if the trick doesn't work? The magician needs to be able to say "Oops, the trick didn't work. The rabbit is still here." That's what the `reject` function is for in a Promise. It's like the magician's backup plan if the trick doesn't work.

Now, the audience (that's us!) is waiting for the trick to be completed. We need to say "When the trick is done, let us know if it worked or not."

In JavaScript, we do this with `.then()` for a successful trick, and `.catch()` for a failed trick:

```javascript
magicTrick.then(message => {
    console.log(message);  // This will print "Rabbit has disappeared!" after 3 seconds
}).catch(error => {
    console.log(error);  // If something went wrong with the trick, we would print an error message here
});
```

This is like saying "When the magic trick is done, if it was successful, tell us the good news. If it failed, tell us what went wrong."

Now, about `async/await`. This is another way to watch the magic trick. But this time, instead of waiting and watching the trick, we say "We'll come back when the trick is done."

We can do this with the `async` and `await` keywords in JavaScript:

```javascript
async function watchMagicTrick() {
    try {
        let message = await magicTrick;
        console.log(message);  // This will print "Rabbit has disappeared!" after 3 seconds
    } catch (error) {
        console.log(error);  // If something went wrong with the trick, we would print an error message here
    }
}

watchMagicTrick();
```

In this code, `async` is like saying "I'm going to watch a magic trick, but I know it might take some time." And `await` is like saying "I'll come back when the magic trick is done."

So that's how Promises, async, and await work in JavaScript. They're all about dealing with things that take some time, like waiting for a magic trick to be completed!

