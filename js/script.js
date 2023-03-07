const userNum = '21';
let userName = prompt('Inserisci il tuo nome');
let userLName = prompt('Inserisci il tuo cognome');
let userColor = prompt('Inserisci il tuo colore preferito');
console.log(userNum);
console.log(userName);
console.log(userLName);
console.log(userColor);
document.getElementById('myPsw').innerHTML = `<h1>${userName}${userLName}${userColor}${userNum}</h1>`;