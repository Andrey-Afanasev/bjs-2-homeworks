function getArrayParams(...arr) {
  let min;
  let max;
  let sum = 0;
  let avg;

  max = Math.max(...arr);
  min = Math.min(...arr);

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2)

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0
  }
  
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum
}

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0
  }

  let min;
  let max;
  
  max = Math.max(...arr);
  min = Math.min(...arr);

  let difference = max - min 

  return difference;
}

function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) {
    return 0
  }

 let sumEvenElement = 0;
 let sumOddElement = 0;

 for (let i = 0; i < arr.length; i++) {
   if ((arr[i] % 2) === 0) {
    sumEvenElement += arr[i];
   } else {
    sumOddElement += arr[i];
   }
 }

 let difference = sumEvenElement - sumOddElement;

 return difference;
}

function averageEvenElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0
  }

 let sumEvenElement = 0;
 let countEvenElement = 0;
 

 for(let i = 0; i < arr.length; i++) {
  if ((arr[i] % 2) === 0) {
    
    sumEvenElement += arr[i];
    countEvenElement += 1;
  }

  let difference = sumEvenElement / countEvenElement

  return difference;
 }


}

function makeWork (arrOfArr, func) {

  let maxWorkerResult = arrOfArr[0];

  maxWorkerResult = Math.max(...arrOfArr);



  for(let i = 0; i < arrOfArr.length; i++) {

  }

}
