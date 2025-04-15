let result = document.getElementById("result");

function isPalindrome(str) {
  const reverse = str.split("").reverse().join("");
  return str === reverse ? "Palindrome" : "Not Palindrome";
}
result.innerText = isPalindrome("Akshata");
