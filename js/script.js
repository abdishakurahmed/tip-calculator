// Input elements
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");

// Button
const calculateBtn = document.getElementById("calculate");

// Output display spans
const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total");
const PerPersonDisplay = document.getElementById("per-person");

// result div for adding paragraph to it if any errors occur
const resultDiv = document.querySelector("#results");

function tipCalculator() {
  // select the input values and stored in a variable
  const billInputValue = Number(billInput.value.trim());
  const tipInputValue = Number(tipInput.value.trim()) / 100;
  // console.log(tipInputValue);
  const peopleInputValue = Number(peopleInput.value.trim());

  const para = document.createElement("p");
  resultDiv.appendChild(para);

  if (
    Number.isNaN(billInputValue) ||
    Number.isNaN(tipInputValue) ||
    Number.isNaN(peopleInputValue)
  ) {
    para.textContent = "please enter a valid number";
  } else if (
    billInputValue <= 0 ||
    tipInputValue <= 0 ||
    peopleInputValue <= 0
  ) {
    para.textContent = "please enter a positive number";
  } else {
    tipAmountDisplay.textContent = `$${billInputValue * tipInputValue}`;
    totalAmountDisplay.textContent = `$${
      billInputValue * tipInputValue + billInputValue
    }`;
    PerPersonDisplay.textContent = `$${
      (billInputValue * tipInputValue + billInputValue) / peopleInputValue
    }`;
  }
}

calculateBtn.addEventListener("click", tipCalculator);
