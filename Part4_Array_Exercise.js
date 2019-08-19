// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function addNew(name){
    roster.push(name)
}

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT
function remove(name){
    var pos = roster.indexOf(name)
    var items = fruits.splice(pos, 1)
    
}

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// DISPLAY ROSTER
function display(){
    for(r in roster){
        console.log(r)
    }
}

// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app
    var choice = prompt("Do you want to use the web app?[y/n]")
    while (choice === "y"){
        if (choice === null){
            return
        }
        var operation = prompt("Add, Remove, Display, Quit?")
        if(operation === "Add"){
            var n = prompt("Add the element: ")
            addNew(n)
        }
        if (operation === "Remove"){
            var n2 = prompt("Enter the element to be removed: ")
            remove(n2)
        }
        if(operation === "Display"){
            display()
        }
        if (operation === "Quit"){
            alert("Thanks for using the application!")
        }
        if (operation === null){
            return
        }
    }
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
