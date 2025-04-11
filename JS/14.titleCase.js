let result = document.getElementById("result");

function titleCase(str) {
  let getWords = str.split(" ");

  const titleCasedWords = getWords.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
  });

  return titleCasedWords.join(" ");
}

result.innerText = titleCase("jaVAScript iS aweSOME");
