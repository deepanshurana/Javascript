
1. `for` loop: This is the basic type of loop in JavaScript. It consists of three parts: initialization, condition, and final expression. Here's an example using an array:

    ```javascript
    const arr = [1, 2, 3, 4, 5];
    
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]); // outputs each array element in order
    }
    ```

2. `for...in` loop: This loop is used to iterate over the properties of an object or the indices of an array or string. For arrays and strings, **it's generally not recommended because the order is not guaranteed and it iterates over inherited enumerable properties as well.**

    ```javascript
    const obj = { a: 1, b: 2, c: 3 };

    for (let prop in obj) {
      console.log(prop, obj[prop]); // outputs property name and value
    }

    const str = "Hello";

    for (let index in str) {
      console.log(index, str[index]); // outputs index and character at that index
    }
    ```

3. `for...of` loop: This loop iterates over iterable objects (like arrays, strings, and some types of objects). It doesn't provide access to the index in the loop, only the values.

    ```javascript
    const arr = [1, 2, 3, 4, 5];

    for (let value of arr) {
      console.log(value); // outputs each array element in order
    }

    const str = "Hello";

    for (let char of str) {
      console.log(char); // outputs each character in order
    }
    ```

The `entries()` method returns a new Array Iterator object that contains the key/value pairs for each index in the array (for an Array) or the key/value pairs (for an Object), or the index/value pairs (for a String).

- Array:

    ```javascript
    const arr = ['a', 'b', 'c'];

    for (let [index, value] of arr.entries()) {
      console.log(index, value); // outputs index and value
    }
    ```

- Object: Unfortunately, the `entries()` method does not exist natively for objects in JavaScript. But you can use `Object.entries()`

    ```javascript
    const obj = { a: 1, b: 2, c: 3 };

    for (let [key, value] of Object.entries(obj)) {
      console.log(key, value); // outputs key and value
    }
    ```

- String:

    ```javascript
    const str = "Hello";

    for (let [index, char] of str.entries()) {
      console.log(index, char); // outputs index and character
    }
    ```

- Map:
    ```javascript
    const map = new Map();
    map.set('a', 1);
    map.set('b', 2);
    for (let [key, value] of map.entries()) {
        console.log(key, value); // outputs key and value
    }
    ```

- Set:
   ```javascript
   const set = new Set(['a', 'b', 'c']);
    for (let [value1, value2] of set.entries()) {
        console.log(value1, value2); // outputs value and value again (sets don't have keys)
    }
    ```

Note that using `entries()` with `for...of` is useful when you need to access both the index and the value in the loop. Also,**keys in arrays are the indices**, **keys in maps can be any data type**, and **sets do not have keys (so entries() returns pairs of the same value).**

