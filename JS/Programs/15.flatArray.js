function flattenArray(arr) {
  let result = [];

  for (let ele of arr) {
    if (Array.isArray(ele)) {
      result = result.concat(flattenArray(ele));
    } else {
      result.push(ele);
    }
  }
  return result;
}

let arrEle = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(arrEle));
