console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// 1. function creation
function printOdds(count) {
  for (let i = 0; i <= count; i++) {
    //   if the iterator number is odd
    if (i % 2 !== 0) {
      // then..
      console.log(i);
    }
  }
}
// 2. Function execution: now we need to invoke/run the function
printOdds(3);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
  if (!userName) {
    console.log("Please provide a valid username");
    return;
  }
  if (!age) {
    console.log("Please provide a valid age");
    return;
  }
  const aboveSixteen = `Congrats ${userName}, you can drive!`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
  if (age < 16) {
    console.log(belowSixteen);
  } else if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log("Invalid age");
  }
}
checkAge("Dan", "16");
// if there is nothing in the age column then 'age' is undefined which makes age <16 false so it auto runs aboveSixteen so you need age >=16

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
// break this down from lease likely to most likely
// look at a cartesian plane and say "ok what does x and y have to be greater than or less than to be in a certain quadrant"

function getQuadrant(x, y) {
  if (x === undefined || y === undefined) {
    console.log("Invalid (x, y) location");
    return null;
  }
  if (x === 0 && y === 0) {
    console.log("Origin Point");
  } else if (x == 0) {
    console.log("Y-axis");
  } else if (y === 0) {
    console.log("X-axis");
  } else if (x > 0 && y > 0) {
    console.log("Quadrant 1");
  } else if (x < 0 && y > 0) {
    console.log("Quadrant 2");
  } else if (x < 0 && y < 0) {
    console.log("Quadrant 3");
  } else if (x < 0 && y > 0) {
    console.log("Quadrant 4");
  }
}
getQuadrant(-5, -3);

// // Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType(side1, side2, side3) {
  if (side1 + side2 < side3 || side1 + side3 < side2) {
    return "Invalid triangle";
  } else if (side1 === side2 && side2 === side3) {
    return "Equilateral triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "isosceles triangle";
  } else {
    return "Scalene";
  }
}
console.log(triangleType(7, 2, 2));
