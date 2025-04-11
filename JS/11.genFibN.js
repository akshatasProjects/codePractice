function genFib(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [1, 0];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    let next = fib[i - 1] + fib[i - 2];
    fib.push(next);
  }
  return fib;
}

console.log(genFib(8));
