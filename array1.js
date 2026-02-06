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

function sortArray() {
  if (arr.length === 0) {
    displayArray("Array is empty");
    return;
  }
  arr.sort((a, b) => a - b);
  displayArray("Sorted Array (Ascending!)");
}

function filterEven() {
  if (arr.length === 0) {
    displayArray("Array is empty");
    return;
  }

  const evens = arr.filter((num) => num % 2 === 0);

  if (evens.length === 0) {
    output.innerHTML = `<strong>Even Numbers</strong> <br>
    No even numbers found`;
    return;
  }

  output.innerHTML = `<strong>Even Numbers</strong> <br>
  [${evens.join(", ")}]`;
}

function calculateSum() {
  if (arr.length === 0) {
    displayArray("Array is empty");
    return;
  }

  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  output.innerHTML = `<strong>Sum</strong> <br>
  ${sum}`;
}

document.getElementById("addBtn").addEventListener("click", addNumber);
document.getElementById("popBtn").addEventListener("click", removeLast);
document.getElementById("shiftBtn").addEventListener("click", removeFirst);
document.getElementById("sortBtn").addEventListener("click", sortArray);
document.getElementById("reverseBtn").addEventListener("click", reverseArray);
document.getElementById("filterBtn").addEventListener("click", filterEven);
document.getElementById("sumBtn").addEventListener("click", calculateSum);

numberInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addNumber();
});
