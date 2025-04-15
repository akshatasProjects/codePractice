let result = document.getElementById("result");

let a = 5;
let b = 3;

a = a + b; // a=8
b = a - b; // b=5
a = a - b; // a=3

result.innerText = `${a},${b}`;
