var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
<<<<<<< HEAD
var newChoc ='reeses';
=======
var newChoc = 'reeses';
>>>>>>> de6c1c4474a8c9d84ea70d83a4caac5b9a7b0d8c

function addElementToBeginningOfArray(chocolateBars, newChoc) {
  return [newChoc, ...chocolateBars];
}
<<<<<<< HEAD

=======
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var newChoc = 'reeses';
>>>>>>> de6c1c4474a8c9d84ea70d83a4caac5b9a7b0d8c
function destructivelyAddElementToBeginningOfArray(chocolateBars, newChoc) {
  chocolateBars.unshift(newChoc);
  return chocolateBars;
}
<<<<<<< HEAD

function addElementToEndOfArray(chocolateBars, newChoc) {
  return [...chocolateBars, newChoc];
}

=======
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var newChoc = 'reeses';
function addElementToEndOfArray(chocolateBars, newChoc) {
  return [...chocolateBars, newChoc];
}
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var newChoc = 'reeses';
>>>>>>> de6c1c4474a8c9d84ea70d83a4caac5b9a7b0d8c
function destructivelyAddElementToEndOfArray(chocolateBars, newChoc) {
  chocolateBars.push(newChoc);
  return chocolateBars;
}
<<<<<<< HEAD

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}

=======
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var newChoc = 'reeses';
function accessElementInArray(chocolateBars, [2]) {
  return chocolateBars[2];
}
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var newChoc = 'reeses';
>>>>>>> de6c1c4474a8c9d84ea70d83a4caac5b9a7b0d8c
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}
<<<<<<< HEAD

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

=======
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var newChoc = 'reeses';
function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(1);
  return chocolateBars;
}
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var newChoc = 'reeses';
>>>>>>> de6c1c4474a8c9d84ea70d83a4caac5b9a7b0d8c
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}
<<<<<<< HEAD

function removeElementFromEndOfArray(chocolateBars) {
=======
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var newChoc = 'reeses';
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
>>>>>>> de6c1c4474a8c9d84ea70d83a4caac5b9a7b0d8c
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
