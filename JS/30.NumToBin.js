let result = document.getElementById("result");

// function toBinary(num) {
//   return num.toString(2);
// }

// USING WHILE LOOPs

function toBinary(num) {
  let binary = "";

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary || 0;
}

result.innerText = toBinary(6);
