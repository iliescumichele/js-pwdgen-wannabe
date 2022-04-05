/* DEBUG

const firstName = "nome";
const lastName = "cognome";
const favColor = "coloreprefe";

*/

const firstName = prompt('Write your first name');
const lastName = prompt('Write your last name');
const favColor = prompt('Write your favourite color');

console.log("firstName is --> " + firstName);
console.log("lastName is --> " + lastName);
console.log("favColor is --> " + favColor);


//Metodo 1
const usrRandomPSW = firstName + lastName + favColor + 22;
console.log("password generated randomly is " + usrRandomPSW);

document.getElementById('psw').innerHTML = usrRandomPSW;


/* Metodo 2
document.getElementById('psw').innerHTML = firstName + lastName + favColor + 22;
*/


/* Metodo 3
const usrRandomPSW = `${firstName}${lastName}${favColor}22`;
console.log("password generated randomly is " + usrRandomPSW);

document.getElementById('psw').innerHTML = usrRandomPSW;
*/