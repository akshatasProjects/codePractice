// WRITE A FUNCTION TO COUNT VOWELS IN A STRING

const res = document.getElementById("result");

// --------------- for loop
/*function countVowels(str) {
  let count = 0;
  let vowel = "aeiouAEIOU";

  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

res.innerText = countVowels("Hello World");*/

//-------------- REGEXP

/* function countVowel(str) {
  let match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}
res.innerText = countVowel("Hello World");*/

// ---------------- REDUCE

function countVowel(str) {
  return str
    .split("")
    .reduce(
      (count, char) => ("aeiouAEIOU".includes(char) ? count + 1 : count),
      0
    );
}
res.innerText = countVowel("Hello World");
