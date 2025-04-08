let result = document.getElementById("result");

let arr = [10, 40, 20, 50, 30, 5];
// let minNum = Math.min(...arr);

// USING FOR LOOP

let minNum = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minNum) {
    minNum = arr[i];
  }
}
result.innerText = minNum;
