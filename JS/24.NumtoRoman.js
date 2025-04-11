let result = document.getElementById("result");

function toRoman(num) {
  const arrObj = [
    { value: 1000, symbol: "M" }, //0
    { value: 900, symbol: "CM" }, //1
    { value: 500, symbol: "D" }, //2
    { value: 400, symbol: "CD" }, //3
    { value: 100, symbol: "C" }, //4
    { value: 90, symbol: "XC" }, //5
    { value: 50, symbol: "L" }, //6
    { value: 40, symbol: "XL" }, //7
    { value: 10, symbol: "X" }, //8
    { value: 9, symbol: "IX" }, //9
    { value: 5, symbol: "V" }, //10
    { value: 4, symbol: "VI" }, //11
    { value: 1, symbol: "I" }, //12
  ];

  let result = "";
  for (let i = 0; i < arrObj.length; i++) {
    while (num > arrObj[i].value) {
      result = result + arrObj[i].symbol;
      num = num - arrObj[i].value;
    }
  }
  return result;
}

result.innerText = toRoman(1994);
