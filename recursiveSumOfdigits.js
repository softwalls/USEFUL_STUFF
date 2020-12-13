/* 
превратим число в массив;
базовый случай - длина массива = 1 цифра;
   возвращаем её в виде числа.
рекурсивный случай - длина массива > 1 цифры;
  возвращаем сумму последнег элемента с функцией.
*/
function getSum(number) {
  let numString = (String(number));
  let numArr = numString.split('');
  
  getNumFromArr = (array) => {
    let text = array.join('');
    return Number(text);
  }
  
  if (numArr.length === 1) {
    return Number(numArr[0]);
  } else if (numArr.length > 1) {
    let popped = Number(numArr.pop());
    return popped += getSum(getNumFromArr(numArr));
  }
}

console.log(getSum(777777));
