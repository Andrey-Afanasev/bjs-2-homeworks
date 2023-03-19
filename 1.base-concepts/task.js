"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c
  if (discriminant < 0) {
    arr = [];
    return arr;
  } else if (discriminant === 0) {
    arr =[-b/(2*a)]
    return arr;
  } else if (discriminant > 0) {
    arr = [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)];
    return arr;
  };
  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let loabBody = amount - contribution;
  let percentConverted = percent/100/12;
  let monthlyPayment = loabBody * (percentConverted + (percentConverted / (((1 + percentConverted)**countMonths) - 1)));
  let totalAmount = +(monthlyPayment * countMonths).toFixed(2);
  return totalAmount;
}
