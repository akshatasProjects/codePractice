const res = document.getElementById("result");
const numbersArr = [10, 25, 48, 90, 3, 7];

// -------------Math.min and spread
/* let maxNum = Math.min(...numbersArr);
res.innerText = maxNum; */

// ------------for loop
// const numbersArr = [10, 25, 48, 90, 3, 7];
/* let minNum = numbersArr[0];
for (let i = 1; i < numbersArr.length; i++) {
  if (numbersArr[i] < minNum) {
    minNum = numbersArr[i];
  }
}
res.innerText = minNum; */

//------------ reduce
/* let minNum = numbersArr.reduce(
  (min, num) => (num < min ? num : min),
  numbersArr[0]
);

res.innerText = minNum; */

//---------------- Sort

let minNum = numbersArr.sort((a, b) => a - b)[0];
res.innerText = minNum;
