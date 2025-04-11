let result = document.getElementById("result");
const obj = {};

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

result.innerText = isEmpty(obj);
