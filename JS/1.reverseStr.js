const inputString = document.getElementById("inputString");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

//using built in methods

btn.addEventListener("click", () => {
  let str = inputString.value;
  // let reverseStr = str.split("").reverse().join("");
  let reverseStr = str.reverse();
  result.textContent = reverseStr;
});

//------------- using for of
/* btn.addEventListener("click", () => {
  let str = inputString.value;
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  result.innerText = reversed;
});
*/

// -------------
