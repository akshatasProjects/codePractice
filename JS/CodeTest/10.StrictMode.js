function printNumbers(first, second, first) {
  console.log(first, second, first);
}

printNumbers(1, 2, 3);
// 3 2 3

// Using Arrow

const numberStrict = (first, second, first) => {
  console.log(first, second, first);
};
numberStrict(1, 2, 3);
// SyntaxError:Duplicate parameter name not allowed
