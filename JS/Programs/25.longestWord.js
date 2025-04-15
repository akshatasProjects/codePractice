let result = document.getElementById("result");
const sentence = "The quick brown fox";

function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = " ";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

result.innerText = longestWord(sentence);
