/*
 * Дан сортированный массив уникальных нумберов и target. Вернуть массив сичел, которые в сумме дают таргет или null
 */

const FIRST_ARR = [1, 10, 15, 100];
const SECOND_ARR = [2, 3, 18, 111, 500];

const getThirdSortedArray = (arr1, arr2) => {
  let firstIdx = 0;
  let secondIdx = 0;

  const resArr = [];

  while (firstIdx < arr1.length && secondIdx < arr2.length) {
    if (arr1[firstIdx] < arr2[secondIdx]) {
      resArr.push(arr1[firstIdx]);
      firstIdx++;
    } else {
      resArr.push(arr2[secondIdx]);
      secondIdx++;
    }
  }

  if (firstIdx === arr1.length && secondIdx === arr2.length) {
    return resArr;
  }

  if (firstIdx < arr1.length) {
    return [...resArr, ...arr1.slice(firstIdx)];
  }

  if (secondIdx < arr2.length) {
    return [...resArr, ...arr2.slice(secondIdx)];
  }
};

const res = getThirdSortedArray(FIRST_ARR, SECOND_ARR);

console.log(res);
