# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @syabdulr/lotide`

**Require it:**

`const _ = require('@syabdulr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Assert if two arrays are strictly equal 
* `assertEqual`: Test for strict equality
* `assertObjectsEqual`: Check for object strict equality
* `countLetters`: Count letters in string
* `countOnly`: Report how many instances of each string were found

* `eqArrays`: Compare arrays and test for strict equality
* `eqObjects`: Test for Strict Object Equality
* `findKey`: findKey in object
* `head`: Return first value in array
* `index`: Description of the Lotide Library
* `letterPositions`: Find index of letters
* `map`: transform an array by applying a function to each of its elements, without changing the original array
* `middle`: Return middle element of an array
* `tail`: Return the all elements but first value in array
* `takeUntil`: // function will return a slice of the array with elements taken from the beginning
* `without`: Take two arrays and return a new array with all elements from the first array that are not present in the second array
