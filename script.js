//

const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate")
const copyEl = document.getElementById("copy")


const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomlower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener('click' , () => {
  const length = lengthEl.nodeValue;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length,
  );

})


function generatePassword(lower, upper, number, symbol, length){


  let generatePassword = '';

  const typesCount = lowewr + upper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typeArr = [{ lower }, {upper}, {number}, {symbol}].fillter
  (
    item => Object.valus(item)[0]
  );
  console.log('typeArr:', typeArr);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typeArr.forEach(type => {

    });
  })
}

function getRandomLower() {
  trturn String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function getRandomSymbol() {
   const symbols = "!@#$%^&*(){}[]+<>/,.';"
   return symbols[Math.floor(Math.random() * symbols.length))];
}
console.log(getRandomNumber());