let result = document.getElementById("result");

// Using for loop
/*function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}*/

// USING RECURSSION
function factorial(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}

result.innerText = factorial(5);
