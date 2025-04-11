let result = document.getElementById("result");

function secondLargest(arr) {
  if (arr.length < 2) {
    return `Array must have atleast 2 values`;
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? "No second larger found" : second;
}

let arrNum = [10, 20, 40, 7, 6];
result.innerText = secondLargest(arrNum);
