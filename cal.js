
"use strict";
//Global variables accessible to all functions
var numbers = []; //create an empty array
var enterButton = null; //global variables must be initialised
var calculateButton = null;

function enterNumber() {
  var number = prompt("Enter your number");
  var number = Number(number); //WHAT DOES THIS LINE DO?
  if (number >= 0) { // test what is entered is a number   
    numbers.push(number); 
  } else {
    alert("Please enter a valid number");
  }
  document.getElementById("numberList").innerHTML = "The numbers you have entered so far are: " + numbers;
  enterButton.textContent = "Enter your next number"; 
  calculateButton.style.visibility = "visible";
}

function calculateAverage() {
  var average = 0;
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i]; 
  }
  average = total / i;
  document.getElementById("result").innerHTML = "The total of your numbers is " + total + " and their average is " + average;
}

function init() {
  enterButton = document.getElementById("enter");
  calculateButton = document.getElementById("calculate");
  calculateButton.style.visibility = "hidden"; 
  enterButton.onclick = enterNumber;
  calculateButton.onclick = calculateAverage;
}

window.onload = init;