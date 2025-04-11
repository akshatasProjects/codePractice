function missNum(arr) {
  let n = arr.length + 1;
  let expSum = (n * (n + 1)) / 2;
  let actSum = 0;

  for (let num of arr) {
    actSum += num;
  }

  let missNumber = expSum - actSum;
  return missNumber;
}

let arrNum = [1, 3, 4, 5];
console.log(missNum(arrNum));
