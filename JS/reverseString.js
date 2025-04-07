function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

function reverseOtherWay(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseOtherWay("car"));
