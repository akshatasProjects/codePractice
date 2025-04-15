let result = document.getElementById("result");

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// using For loop

function reverseString(str) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

result.innerText = reverseString("Akshata");
