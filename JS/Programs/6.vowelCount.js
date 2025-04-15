let result = document.getElementById("result");

/*function vowelCount(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
} */

// USING REGEXP

function vowelCount(str) {
  let match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

result.innerText = vowelCount("Hello World");
