const binaryText = document.getElementById("binary-text");
const resultText = document.getElementById("result-text");

function bin2Dec(e) {
  e.preventDefault();

  if (binaryText.value.match(/^[0-1]+$/g) === null) {
    resultText.innerText = "Please, enter 0 or 1!";
  } else {
    resultText.innerText = parseInt(binaryText.value, 2);
  }
}
document.getElementById("button-submit").addEventListener("click", bin2Dec);
