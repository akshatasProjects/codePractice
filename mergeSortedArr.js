const res = document.getElementById("result");

function mergeSortedArr(arr1, arr2) {
  let mergeArr = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);
      i++;
    } else {
      mergeArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergeArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergeArr.push(arr2[j]);
    j++;
  }

  return mergeArr;
}
