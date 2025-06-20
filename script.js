function calculateZakat() {
  const wealth = parseFloat(document.getElementById("wealth").value);
  const nisab = parseFloat(document.getElementById("nisab").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(wealth) || isNaN(nisab) || wealth < 0 || nisab < 0) {
    resultDiv.innerHTML = "Please enter valid numbers for wealth and Nisab.";
    return;
  }

  if (wealth >= nisab) {
    const zakat = wealth * 0.025;
    resultDiv.innerHTML = `You are eligible to pay Zakat. Your Zakat amount is: <strong>${zakat.toFixed(2)}</strong>`;
  } else {
    resultDiv.innerHTML = "You are not eligible to pay Zakat (wealth is below Nisab).";
  }
}
