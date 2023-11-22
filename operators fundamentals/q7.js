/* Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate
arithmetic operators. */

var radius = 10;

var area = Math.PI * Math.pow(radius, 2);

console.log(
  "The area of the circle with a radius of " +
    radius +
    " is: " +
    area.toFixed(2)
);