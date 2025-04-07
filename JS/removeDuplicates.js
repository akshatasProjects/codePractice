// REMOVE DUPLICATES FROM AN ARRAY
const res = document.getElementById("result");

// -----------SET

/*function removeDuplicates(arr) {
  return [...new set(arr)];
}
res.innerText = removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4]);
*/

// Using filter() and indexOf()

let arrEle = [1, 1, 2, 2, 3, 4, 4, 5];

let uniqueVal = arr.filter((ele, index, arr) => {
  return arr.indexOf(ele) === index;
});
