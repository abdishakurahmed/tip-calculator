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

function tipCalculator() {
  // select the input values and stored in a variable
  const billInputValue = Number(billInput.value.trim());
  const tipInputValue = Number(tipInput.value.trim());
  const peopleInputValue = Number(peopleInput.value.trim());
}
