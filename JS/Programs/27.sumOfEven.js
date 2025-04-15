let result = document.getElementById("result");
const arr = [1, 2, 5, 4, 3, 8];
function sumOfEven(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}

result.innerText = sumOfEven(arr);
