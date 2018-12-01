# word-puzzle

Read through the problems in the app.js file and match each answer with the letter to find out what this 4 word phrase is. Unscramble the last two words on your own.

## _ _ _ _ | _ _ _ | HET | GTHSLI

## Objective

Analyze **Functions**, **If Statements** and **Arrays**.

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of JS (arrays, objects, for loops, functions, if statements)

## Concepts

JS | Description
---|-------------
For Loops | Execute a block of code over and over again with a different value each time (See example below).
Objects | Variables that can contain many values (See example below).

### For Loops
Resource: https://www.w3schools.com/js/js_loop_for.asp

A for loop helps us execute code over and over again with a different value each time. Let's take a look at this code.

``` JavaScript
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// STRUCTURE
for (statement1; statement2; statement3) {
  // code to be executed
}
```

The structure of the for loop consists of the following:
* The first statement is executed once and is your starting point. We store our starting point in a variable that is usually written as 'i'. In this case, our starting point is 0.
* The second statement is the condition for when we should stop running our loop. In this case, we will only be repeating the code when i is less than 3.
* The third statement is executed every time, after the code is executed. In this case, we increment i by 1.

Copy and paste the first for loop into a text editor and run. What will appear in the console? If i is incrementing by 1 and we start with 0, it can only loop 3 times (after that, i >= 3 and we cannot continue looping).

### Objects
Resource: https://www.w3schools.com/js/js_objects.asp

An object is a variable that can store many values. This is one way to create an object.

``` javascript
var dog = {
  color: 'white',
  numLegs: 4,
  siblings: 2
}

console.log(dog.color);
```

The properties of an object are written in name:value pairs. Color is a name, and 'white' is the value. To access these values, use ```objectName.propertyName```. Try it out! Copy the code into a text editor and run it.

## Your Challenge

### Part 1

To complete Part I, fulfill the following requirements:

1. Clone this repository into your documents folder.
2. Go into the app.js file and answer the questions (1 - 7). There are 4 possible answers but only 1 correct one. Choose the correct one and remember the letter next to it (write it down or make a mark of it).
3. These letters will form the first two words. Unscramble the last two to find out what the sentence is!
