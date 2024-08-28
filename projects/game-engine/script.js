let randomizeArray = document.getElementById("randomizeArray");
let header = document.getElementById("displayHeader");
let bubbleSort = document.getElementById("bubbleSort");
let insertionSort = document.getElementById("insertionSort");
let mergeSort = document.getElementById("mergeSort");

let valueText = document.getElementById("valueText");
let barsContainer = document.getElementById("barsContainer");
let slider = document.getElementById("slider");

let bodyColour = document.body;

let minRange = 1;
let maxRange = 10;
let numOfBars = 50;
const heightFactor = 10;
const sleepFactor = 100;
let algotouse = "";
let unsortedArray = new Array(numOfBars);

function RandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CreateRandomArray(minRange, maxRange) {
  let array = new Array(maxRange);
  for (let i = 0; i < maxRange; i++) {
    array[i] = RandomNum(minRange, maxRange);
  }

  return array;
}

function RenderBars(array) {
  for (let i = 0; i < array.length; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * heightFactor + "px";
    barsContainer.appendChild(bar);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  Update();
});

slider.addEventListener("input", function () {
  maxRange = slider.value;
  Update();
});

randomizeArray.addEventListener("click", function () {
  Update();
});

bubbleSort.addEventListener("click", function () {
  BubbleSort(unsortedArray);
});

insertionSort.addEventListener("click", function () {
  InsertionSort(unsortedArray);
});

mergeSort.addEventListener("click", function () {
  MergeSort(unsortedArray);
});

function Sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Update() {
  unsortedArray = CreateRandomArray(minRange, maxRange);
  barsContainer.innerHTML = "";
  valueText.innerHTML = maxRange;
  RenderBars(unsortedArray);
}

//Algorithms
async function BubbleSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        for (let k = 0; k < bars.length; k++) {
          bars[k].style.backgroundColor = "aqua";
        }

        //Swap Logic
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        //Swap Visuals
        bars[j].style.height = array[j] * heightFactor + "px";
        bars[j].style.backgroundColor = "#ffffff";

        bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
        bars[j + 1].style.backgroundColor = "#ffffff";

        await Sleep(sleepFactor);
      }
    }
    await Sleep(sleepFactor);
  }
  return array;
}

async function InsertionSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
      bars[j + 1].style.backgroundColor = "#ffffff";
      await Sleep(sleepFactor);

      for (let k = 0; k < bars.length; k++) {
        if (k != j + 1) {
          bars[k].style.backgroundColor = "aqua";
        }
      }
      j = j - 1;
    }
    array[j + 1] = key;
    bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
    bars[j + 1].style.backgroundColor = "#ffffff";
    await Sleep(sleepFactor);
  }

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
  }
  return array;
}
