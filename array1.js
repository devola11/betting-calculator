let arr = [];

const numberInput = document.getElementById("numberInput");
const output = document.getElementById("output");

function displayArray(message) {
  output.innerHTML = `<strong>${message}</strong> <br>
  [${arr.join(", ")}]`;
}

function addNumber() {
  const value = Number(numberInput.value);

  if (numberInput.value === "" || isNaN(value)) {
    displayArray("Please enter a valid number");
    return;
  }
  arr.push(value);
  numberInput.value = "";
  displayArray("Added Number");
}

function removeLast() {
  if (arr.length === 0) {
    displayArray("Array is empty");
    return;
  }
  arr.pop();
  displayArray("Removed last element");
}

function removeFirst() {
  if (arr.length === 0) {
    displayArray("Array is empty");
    return;
  }
  arr.shift();
  displayArray("Removed first element");
}
function reverseArray() {
  if (arr.length === 0) {
    displayArray("Array is empty");
    return;
  }
  arr.reverse();
  displayArray("Reversed Array");
}
