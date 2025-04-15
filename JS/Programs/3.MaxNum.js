let result = document.getElementById("result");

// let maxNum = Math.max(...arr);
// result.innerText = maxNum;

// USING FOR LOOP

let arr = [10, 25, 48, 90, 6, 2];
let maxNum = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
  console.log(maxNum);
}

result.innerText = maxNum;
