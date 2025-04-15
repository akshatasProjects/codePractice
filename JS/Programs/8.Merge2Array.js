let result = document.getElementById("result");
let arr1 = [1, 6, 3, 9, 2];
let arr2 = [4, 5, 7, 8];

function MergeArray(array1, array2) {
  let mergedArr = [];
  let i = 0,
    j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergedArr.push(array1[i]);
      i++;
      0;
    } else {
      mergedArr.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    mergedArr.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    mergedArr.push(array2[j]);
    j++;
  }

  return mergedArr;
}

result.innerText = MergeArray(arr1, arr2);
