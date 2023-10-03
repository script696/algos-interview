/*
 * Дан сортированный массив уникальных нумберов и target. Вернуть массив сичел, которые в сумме дают таргет или null
 */

const NUMS_MOCK = [1, 2, 4, 6, 8, 9, 14, 15];
const targetMock = 13;

/* С помощью двух вложенных циклов
 *  O(n^2)
 */
const checkSum1 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
};

const res1 = checkSum1(NUMS_MOCK, targetMock);
console.log(res1, "res1");

/* С помощью двух указателей
 *  O(n)
 */

const checkSum2 = (arr, target) => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    const curr = arr[leftIdx] + arr[rightIdx];

    if (curr === target) {
      return [arr[leftIdx], arr[rightIdx]];
    }

    if (curr > target) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }

  return null;
};

const res2 = checkSum2(NUMS_MOCK, targetMock);
console.log(res2, "res2");
