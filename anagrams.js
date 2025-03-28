// Write a function to check if strings are anagram or not
/* const res = document.getElementById("result");
let str1 = "listen";
let str2 = "silent";

str1 = str1.toLowerCase().replace(/\s\g/, "");
str2 = str2.toLowerCase().replace(/\s\g/, "");

if (str1.length === str2.length) {
  return str1.split("").sort().join() === str2.split("").sort().join();
} */

// USING FREQUENCY COUNT

function anagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s\g/, "");
  str2 = str2.toLowerCase().replace(/\s\g/, "");

  if (str1.length !== str2.length) return false;

  let charCount = {};

  for (let char of str1) {
    // charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] === "undefine") {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let char in str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}
