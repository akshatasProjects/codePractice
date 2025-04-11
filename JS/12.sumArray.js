function sumArr(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

let arrSum = [3, 7, 2, 5];

console.log(sumArr(arrSum));
