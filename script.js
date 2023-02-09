"use strict";

const globe = document.getElementById("fa-globe");
const startingPointInput = document.getElementById("starting-point");
const destinationPointInput = document.getElementById("destination");

let swap = startingPointInput.value;
function toggleArrows() {
  swap = startingPointInput.value;
  startingPointInput.value = destinationPointInput.value;
  destinationPointInput.value = swap;
}

globe.addEventListener("click", toggleArrows);
