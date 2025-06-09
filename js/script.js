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

const para = document.createElement("p");
resultDiv.appendChild(para);

function tipCalculator() {
  // select the input values and stored in a variable
  const billInputValue = Number(billInput.value.trim());
  const tipInputValue = Number(tipInput.value.trim());
  // console.log(tipInputValue);
  const peopleInputValue = Number(peopleInput.value.trim());

  if (
    Number.isNaN(billInputValue) ||
    Number.isNaN(tipInputValue) ||
    Number.isNaN(peopleInputValue)
  ) {
    para.textContent = "please enter a valid number";
  } else if (
    billInputValue <= 0 ||
    tipInputValue <= 0 ||
    peopleInputValue <= 0 ||
    tipInputValue > 100
  ) {
    para.textContent =
      "please enter a positive number or percent less than or equal to 100";
  } else {
    tipAmountDisplay.textContent = `$${billInputValue * (tipInputValue / 100)}`;
    totalAmountDisplay.textContent = `$${
      billInputValue * (tipInputValue / 100) + billInputValue
    }`;
    PerPersonDisplay.textContent = `$${
      (billInputValue * (tipInputValue / 100) + billInputValue) /
      peopleInputValue
    }`;
  }
}

calculateBtn.addEventListener("click", tipCalculator);
