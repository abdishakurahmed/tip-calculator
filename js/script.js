// Input elements
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");

// Button
const calculateBtn = document.getElementById("calculate");

// Output display spans
const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total");
const perPersonDisplay = document.getElementById("per-person");

// result div for adding paragraph to it if any errors occur
const resultDiv = document.querySelector("#results");

const para = document.createElement("p");

function tipCalculator() {
  // select the input values and stored in a variable
  const billInputValue = Number(billInput.value.trim());
  const tipInputValue = Number(tipInput.value.trim());
  // console.log(tipInputValue);
  const peopleInputValue = Number(peopleInput.value.trim());

  resultDiv.appendChild(para);

  if (
    Number.isNaN(billInputValue) ||
    Number.isNaN(tipInputValue) ||
    Number.isNaN(peopleInputValue)
  ) {
    para.textContent = "please enter a valid number";
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
    perPersonDisplay.textContent = "$0.00";
  } else if (
    billInputValue <= 0 ||
    tipInputValue <= 0 ||
    peopleInputValue <= 0 ||
    tipInputValue > 100
  ) {
    para.textContent =
      "please enter a positive number or percent less than or equal to 100";
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
    perPersonDisplay.textContent = "$0.00";
  } else {
    resultDiv.removeChild(para);
    tipAmountDisplay.textContent = `$${billInputValue * (tipInputValue / 100)}`;
    totalAmountDisplay.textContent = `$${
      billInputValue * (tipInputValue / 100) + billInputValue
    }`;
    perPersonDisplay.textContent = `$${
      (billInputValue * (tipInputValue / 100) + billInputValue) /
      peopleInputValue
    }`;
  }
}

calculateBtn.addEventListener("click", tipCalculator);
