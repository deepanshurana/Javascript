
# PROTOTYPE AND INHERITANCE
Think about when you're playing with toy cars. You might have different kinds of cars: sports cars, trucks, and sedans. All these cars have some things in common - they all have wheels, engines, seats, and so on. But each kind of car also has its own special features. Sports cars might be fast, trucks can carry heavy stuff, and sedans are comfortable.

Now, let's relate this to JavaScript.

In JavaScript, all objects have something called a "prototype". This prototype is like a blueprint or a list of features that all objects of the same type share. It's like the common features all our cars have: wheels, engines, seats, etc.

```javascript
let carPrototype = {
    startEngine: function() {
        return "Engine started!";
    },
    stopEngine: function() {
        return "Engine stopped!";
    }
}
```

In our toy car world, we could say that `carPrototype` is the blueprint for all cars. Any car we make will be able to start and stop its engine.

Now, let's say we want to make a specific kind of car - a sports car. In JavaScript, we can create a new object and link it to the `carPrototype`. This is called "inheritance", because the sports car inherits or receives all the features of the generic car.

```javascript
let sportsCar = Object.create(carPrototype);

sportsCar.startEngine();  // returns "Engine started!"
sportsCar.stopEngine();   // returns "Engine stopped!"
```

The `sportsCar` has inherited the `startEngine` and `stopEngine` methods from `carPrototype`.

But remember, sports cars also have some special features. We can add those special features directly to the `sportsCar`.

```javascript
sportsCar.goFast = function() {
    return "Zooming off at top speed!";
}
```

Now `sportsCar` has a new method `goFast` that's not in the `carPrototype`, but that's okay because we added it directly to `sportsCar`. Other kinds of cars (like trucks or sedans) that we might create and link to `carPrototype` won't have this `goFast` method, because it's unique to `sportsCar`.

And that's a simple explanation of prototypes and inheritance in JavaScript! The prototype is a list of features that an object has, and inheritance is how we can create a new object that gets all the features of another object.