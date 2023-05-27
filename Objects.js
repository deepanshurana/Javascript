
////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  namelength: function(){
    console.log(name.length)
}
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  f: function(){
      alert("Name is "+this.name+", "+"Job is "+this.job + ", "+"Age is "+this.age+".")
  }
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  f: function(){
      var splt = this.name.split(" ") // use split function 
     console.log(splt[1])
  }
}


// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
