const result = document.getElementById("result");

function reverseString(str) {
  return str.split("").reverse().join("");
}
// result.textContent = reverseString("Hello");

// using for loop

function reversedStr(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
// result.textContent = reversedStr("Hello");

// using Recusrssive method
function recurssion(str) {
  if (str === "") return;
  return recurssion(str.slice("1")) + str[0];
}
result.textContent = recurssion("Car");
