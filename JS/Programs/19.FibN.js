let result = document.getElementById("result");

// return nth fibonacci

/* how fibonanccci works -- by adding num to prev num where base numbers are 0 and 1(indexes) the
next number will be added to the prev one until it reaches the n num*/

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

result.innerText = fib(10);

/*TRACE

result.innerText = fib(10);
    i=10    n=10
    next = 21 + 34  - 55
    prev = 34
    curr = 55


1 2 3 5 8 13 21 34 55 */
