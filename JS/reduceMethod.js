let result = document.getElementById("result");

// reverse String

function reverseString(str) {
  return str.split("").reduce((rev, char) => {
    char + rev, "";
  });
}

// Sum of array

function sumArr(arr) {
  return arr.reduce((sum, num) => {
    sum + num, 0;
  });
}

result.textContent = sumArr([1, 2, 3, 4, 5]);

// Count oocurence of words in an array
function countWords(words) {
  return words.reduce((total, word) => {
    total[word] = (total[word] || 0) + 1;
    return total;
  }, {});
}

// result.innerText = JSON.stringify(
//   countWords(["apple", "banana", "apple", "orange"])
// );

// Maximum Number

function findMax(arr) {
  return arr.reduce((max, num) => {
    num > max ? num : max, arr[0];
  });
}

console.log(findMax([10, 25, 5, 40, 15]));
