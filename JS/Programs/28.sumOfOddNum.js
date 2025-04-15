let result = document.getElementById("result");
const arr = [4, 7, 1, 8, 3];
function sumOfOdds(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

result.innerText = sumOfOdds(arr);
