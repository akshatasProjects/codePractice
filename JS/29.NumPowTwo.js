let result = document.getElementById("result");

function isPowerOfTwo(num) {
  if (num < 1) return false;

  while (num > 1) {
    if (num % 2 !== 0) return false;
    num = num / 2;
  }
  return true;
}
result.innerText = isPowerOfTwo(8);
