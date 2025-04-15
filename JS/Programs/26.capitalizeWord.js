let result = document.getElementById("result");

function capitalize(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

result.innerText = capitalize("hello world");
