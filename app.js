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
  const aboveSixteen = `Congrats ${userName}, you can drive!`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}
checkAge("Dan", "16");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function cartesian(x, y) {
    if ()
}

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
