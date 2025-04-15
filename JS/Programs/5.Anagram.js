let result = document.getElementById("result");

/*function anagram(str1, str2) {
  str1 = str1.toLowerCase().trim();
  str2 = str2.toLowerCase().trim();

  if (str1.length !== str2.length) return false;

  let charCount = {};

  for (let char of str1) {
    if (charCount[char] == undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}
*/

// USING SPLIT SORT JOIN

function anagram(str1, str2) {
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");

  return str1 === str2 ? "Anagram" : "Not";
}

result.innerText = anagram("silent", "listen");
