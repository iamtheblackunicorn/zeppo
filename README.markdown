# ZEPPO :crystal_ball: :guitar:

![GitHub CI](https://github.com/iamtheblackunicorn/zeppo/actions/workflows/node.yml/badge.svg)

***Convert between numbers of different bases.***

## ABOUT :books:

Roughly a year ago, I set myself the challenge of implementing a set of functions that could convert between numbers of different bases. I implemented this in Dart and decided to re-write this implementation in Javascript yesterday. The Dart implementation can be found [here](https://github.com/iamtheblackunicorn/harpo). The bases this library handles are: base 10, base 2, and base 16.

## USAGE :hammer:

### Use ***Zeppo** in a Node.js project

To use ***Zeppo*** in a Node.js project, run this command in your project's root directory:

```bash
$ npm install --save-dev zeppo
```

Be sure to also add the `"type":"module"` flag to your project's manifest, `package.json`.

### APIs

***Zeppo*** offers the following functions:

- `reverseArray(array)`: Reverses the order of an array and returns the reversed array.
- `letterIndex(letter)`: Gets the index of a letter in the alphabet. Returns zero if the letter isn't in the alphabet.
- `getLetterFromIndex(index)`: Gets the letter from a supplied index. Returns an empty string if a letter cannot be found.
- `binToDec(binaryNumber)`: Converts a base 2 number to a base 10 number.
- `decToBin(decimalNumber)`: Converts a base 10 number to a base 2 number.
- `hexToDec(hexNumber)`: Converts a base 16 number to a base 10 number.
- `testAll()`: Tests all of the above.

### Example

Here's a small example:

- 1.) Initialize a new Node.js project with the following command in a directory of your choosing:

```bash
$ npm init -y 
```

- 2.) Install ***Zeppo***:

```bash
$ npm install --save-dev zeppo
```

- 3.) Be sure to add this line to your project's `package.json`:

```JSON
"type":"module",
```

- 4.) Create your `index.js` and put the following code inside it:

```js
// index.js
import zeppo from 'zeppo';

function main(){
  var myNum = 21;
  console.log(zeppo.decToBin(myNum));
  // Should output 21.
  console.log(zeppo.binToDec(decToBin(myNum)));
}

main();
```

- 5.) Run the project:

```bash
$ node .
```

- 6.) Optional: If you're not sure how to use this project, check out the example project.

## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.
- Upload to NPM.

## NOTE :scroll:

- *Zeppo :crystal_ball: :guitar:* by Alexander Abraham :black_heart: a.k.a. *"The Black Unicorn" :unicorn:*
- Licensed under the MIT license.
