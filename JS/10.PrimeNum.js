let result = document.getElementById("result");

function PrimeNum(num) {
  if (num < 2) return false;
  if (num === 2 || num === 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;
}

result.innerText = PrimeNum(6);
