/*console.log("I like pizza!");
console.log("It's really good");

window.alert("I REALLY LOVE PIZZA");*/

//This is a comment

/*
    this
    is 
    a 
    multiline
    comment
*/

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

//Two steps:
//1. Declaration (var,let,const)
//2. Assignment (= assignment operator)
/*
let firstName = "Emanuel";//strings
let age = 25;//numbers
let student = false;//boolean

console.log(firstName);
console.log(age);
console.log(student);

document.getElementById("p1").innerHTML = "Hello" + " " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student; 
*/

//Constantes. No se puede cambiar su valor

const PI = 3.14159;//es buena practica ponerla con mayusculas
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2*pi*radius;

console.log("The circumference is: ",circumference);