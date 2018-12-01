// 1). What corresponds to arr[3]?

var arr1 = ['kitchen', 'timer', 3, 'false', false];


// Q. kitchen
// R. timer
// S. 3
// T. false

// 2. What will this function print to the console?

var count = 3;
function check() {
  if (count < 3) {
    console.log('hello');
  } else {
    console.log('goodbye');
  }
}

// S. hello
// T. error
// U. goodbye
// V. undefined

// 3. What will this print to the console?

var isOpen = false;

function door() {
  if (isOpen) {
    console.log('Close the door!');
  } else {
    console.log('The door is already closed.')
  }
}

// R. The door is already closed.
// S. Close the door!
// T. undefined
// U. error

// 4. What will this print to the console?

var array = [41, 2, 88, 5];
for (i = 0; i < array.length; i++) {
 console.log(array[i]);
}

// L. 5, 88, 2, 41 (on the same line)
// M. 41, 2, 88, 5 (on the same line)
// N. 41, 2, 88, 5 (on separate lines)
// O. 5, 88, 2, 41 (on separate lines)

// 5. What will this print to the console?
var desk = {
  numLegs: 4,
  color: 'brown'
}
console.log(desk.color);

// M. 4
// O. brown
// P. undefined
// Q. error

// 6. What will this print to the console?

var sally = {
  gender: female,
  favoriteColor: 'blue',
  favoriteAnimal: 'panda',
  age: 13
}
var bob = {
  gender: male,
  favoriteColor: 'purple',
  favoriteAnimal: 'tiger',
  age: 14
}

var people = [sally, bob];

for (i = 0; i < people.length; i++) {
  console.log(people[i].age);
}

// E. 13
// F. 13 14 (on separate lines)
// G. 14
// H. 13 14 (on the same line)

// 7. What will this print to the console?
var counter = 0;
counter++;
counter+= 5;
counter+= 5;

// F. 11
// G. 10
// H. 9
// I. 8
