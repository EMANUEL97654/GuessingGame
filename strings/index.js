//useful string properties and methods
/*
let userName = "Emanuel";
let phoneNumber = "4943-0894";
*/
/*
console.log(userName.length);
let firstLetter = userName.charAt(0);//primera posicion
console.log(firstLetter);
let index = userName.indexOf("m");
console.log(index);
*/
/*
userName = userName.trim();//Elimina los espacios

console.log(userName);

phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber);
*/

//slice() extracts a section of a string and returns it as a new string without modifying the original string
/*
let fullName = "Emanuel Gonzalez";
let firstName;
let lastName;*/
/*
firsName = fullName.slice(0,7)
lastName = fullName.slice(8);
*/
/*
firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);*/

//Method chaining

let userName="emanuel  ";

let letter = userName.charAt(0).toUpperCase().trim();
console.log(userName);
console.log(letter);
