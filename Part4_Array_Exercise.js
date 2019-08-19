// ENTRY INITIALISATION
var roster = []
// ADD ROSTER ENTRY 
function addNew(){
    var name = prompt("Enter the entry: ")
    roster.push(name)
    
}

// REMOVE ROSTER ENTRY 
function remove(){
    var n = prompt("Remove the Entry: ")
    var pos = roster.indexOf(name)
    roster.splice(pos, 1)
    
}


// DISPLAY ROSTER
function display(){
  console.log(roster)
}



// Start by asking if they want to use the web app
    var choice = prompt("Do you want to use the web app?[y/n]")
    if (choice === 'y'){
        var request = 'e' // random value to request 
        while(request !== 'quit'){
            request = prompt("Enter the operation: Add, Remove, Display and Quit\n")
            if(request === 'add'){
                addNew()
            }else if(request === 'remove'){
                remove()
            }else if(request === 'display'){
                display()
            }else{
                alert(' WARNING: Wrong choice Initiation!') // for loop termination. 
            }
        }
    }

