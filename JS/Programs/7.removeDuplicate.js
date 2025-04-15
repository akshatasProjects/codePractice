let result = document.getElementById("result");
let arr = [1, 1, 2, 4, 2, 4, 7, 8, 4, 3];

// USING SET
function removeDuplicate(array) {
  return [...new Set(array)];
}

result.innerText = removeDuplicate(arr);
