//

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("punctuation");
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("copy");

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener("click", () => {
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.value = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = "";

  const typesCount = lower + upper + number + symbol;

  console.log("typesCount: ", typesCount);

  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );
  console.log("typeArr:", typeArr);

  if (typesCount === 0) {
    return "";
  }

  var functionArr = [];
  if (lower) {
    functionArr.push(getRandomLower);
  }
  if (upper) {
    functionArr.push(getRandomUpper);
  }
  if (number) {
    functionArr.push(getRandomNumber);
  }
  if (symbol) {
    functionArr.push(getRandomSymbol);
  }

  for (let i = 0; i < length; i++) {
    var x = Math.floor(Math.random() * functionArr.length);
    generatePassword += functionArr[x]();
  }
  console.log(generatePassword);
  return generatePassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]+<>/,.';";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(getRandomNumber());
// console.log(getRandomUpper());
// console.log(getRandomSymbol());
// console.log(getRandomLower());
