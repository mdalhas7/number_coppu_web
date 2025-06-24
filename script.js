let numbers = [];
let currentIndex = 0;

function startCopying() {
  const textarea = document.getElementById("numberInput").value.trim();
  numbers = textarea.split(/\n|\r/).filter(n => n.trim() !== "");
  currentIndex = 0;

  if (numbers.length === 0) {
    alert("Please enter some numbers first!");
    return;
  }

  document.getElementById("copySection").style.display = "block";
  updateDisplay();
}

function copyNumber() {
  if (currentIndex < numbers.length) {
    const currentNumber = numbers[currentIndex].trim();
    navigator.clipboard.writeText(currentNumber);

    document.getElementById("currentNumber").innerText = currentNumber;
    document.getElementById("copiedCount").innerText = currentIndex + 1;
    document.getElementById("remainingCount").innerText = numbers.length - currentIndex - 1;
    document.getElementById("totalCount").innerText = numbers.length;

    currentIndex++;
  } else {
    alert("All numbers have been copied!");
  }
}

function updateDisplay() {
  if (numbers.length > 0) {
    document.getElementById("currentNumber").innerText = numbers[currentIndex];
    document.getElementById("copiedCount").innerText = currentIndex;
    document.getElementById("remainingCount").innerText = numbers.length - currentIndex;
    document.getElementById("totalCount").innerText = numbers.length;
  }
}
