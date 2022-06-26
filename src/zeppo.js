/*
ZEPPO.JS by Alexander Abraham,
a.k.a. "The Black Unicorn", a.k.a. "Angeldust Duke".
Licensed under the MIT license.
*/

'use strict';

// Reverses the order of an array 
// and returns the reversed array.
export function reverseArray(array){
    let arrayCopy = array;
    array.reverse();
    return array    
}

// Gets the index of a letter in the alphabet.
// Returns zero if the letter isn't in the 
// alphabet.
export function letterIndex(letter){
    let result = 0;
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let letterList = alphabetString.split('');
    for (var i = 0; i < letterList.length; i++){
        if (letter === letterList[i]){
            result = i + 1;
        }
        else {}
    }
    return result;
}

// Gets the letter from a supplied index.
// Returns an empty string if a letter cannot be found.
export function getLetterFromIndex(index){
    let result = '';
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let letterList = alphabetString.split('');
    for (var i = 0; i < letterList.length; i++){
        let actualIndex = index - 1;
        if (actualIndex === i){
            result = letterList[i];
        }
        else {}
    }
    return result;
}

// Converts a base 2 number to a base 10 number.
export function binToDec(binaryNumber) {
    let origDigitsList = binaryNumber.split('');
    let digitsList = reverseArray(origDigitsList);
    var lenDigitsList = digitsList.length;
    var decimalSum = 0;
    for (var i = 0; i < lenDigitsList; i++) {
      if (digitsList[i] == '1') {
        var toAdd = Math.pow(2, i);
        decimalSum = decimalSum + toAdd;
      } else {}
    }
    let result = decimalSum.toString();
    return result;
}

// Converts a base 10 number to a base 2 number.
export function decToBin(decimalNumber) {
    let endChars = [];
    let dec = decimalNumber;
    let initItem = dec % 2;
    var startDigit = initItem.toString();
    endChars.push(startDigit);
    while (Math.floor(dec / 2) != 0) {
      dec = Math.floor(dec / 2);
      var itemOneToAdd = dec % 2;
      var itemTwoToAdd = itemOneToAdd.toString();
      endChars.push(itemTwoToAdd);
    }
    var reversedChars = reverseArray(endChars);
    let result = reversedChars.join('');
    return result;
}

// Converts a base 16 number to a base 10 number.
export function hexToDec(hexNumber) {
    var base = 16;
    let result = 0;
    let digitSetString = '0123456789ABCDEF';
    var digitSet = digitSetString.split('');
    var hexCharsBase = hexNumber.split('');
    var hexChars = reverseArray(hexCharsBase);
    for (var i = 0; i < hexChars.length; i++) {
      var hexChar = hexChars[i];
      if (digitSet.includes(hexChar) === true) {
        var posMul = digitSet.indexOf(hexChar);
        var posPower = Math.pow(base, i);
        var posProduct = posMul * posPower;
        result = result + posProduct;
      } else {
        throw 'Illegal character found!';
      }
    }
    return result.toString();
}

// Tests all of the above.
export function testAll(){
  let testArray = [1,2,3,4];
  console.log(reverseArray(testArray));
  let testLetter = 'b';
  console.log(letterIndex(testLetter));
  console.log(getLetterFromIndex(letterIndex(testLetter)));
  let binaryNum = '10101';
  console.log(binToDec(binaryNum));
  console.log(decToBin(21));
  let testHexNum = 'FF7BAC';
  console.log(hexToDec(testHexNum));
}