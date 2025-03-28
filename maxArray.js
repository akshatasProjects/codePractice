const result = document.getElementById("result");
/*
FIND THE MAXIMUM NUMBER IN ARRAY

1. Using Math.max() with Spread Operator (...)
2. Using reduce()
3. Using a for Loop
4. Using sort()

*/

const numbersArr = [10, 25, 48, 90, 3, 7];
// 1

let maxNum = Math.max(...numbersArr);
// result.innerText = maxNum;

// 2
numbersArr.reduce((max, num) => (num > max ? num : max), numbersArr[0]);
// result.innerText = maxNum;
console.log(maxNum);

// 3
maxNum = numbersArr[0];

for (let i = 1; i < numbersArr.length; i++) {
  if (numbersArr[i] > maxNum) {
    maxNum = numbersArr[i];
  }
}
// result.innerText = maxNum;

// 4.
maxNum = numbersArr.sort((a, b) => b - a)[0];
result.innerText = maxNum;
