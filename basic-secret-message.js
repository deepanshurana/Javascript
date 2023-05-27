var f = prompt("Enter first name: ")
var l = prompt("Enter last name: ")
var age = prompt("Enter age");
var h = prompt("Enter height: ")
var pet = prompt("Pet name: ")
var p = pet.length
alert("Thanks for your consideration. We will contact you soon.")
// Conditions (Booleans)
var name_con = false
var age_con = false
var h_con = false
var p_con = false

if (f[0] === l[0]){ // check for the first characters of first and last name
    name_con = true
}
if (  age >= 20 && age<= 30){ // check age of the user
    age_con = true
}
if(h >= 170){ // height conditions 
    h_con = true
}

if(pet[p-1] === "y"){  // user's pet condition
    p_con = true
}

if (name_con && age_con && h_con && p_con){
    console.log("Welcome Agent " + f + " "+ l+", you have decoded the messages")
}
else{
    console.log("\"ACCESS  DENIED!!\", Nothing to see here.")
}