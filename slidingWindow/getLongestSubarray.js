const NUMS = [3, 1, 2, 7, 4, 2, 1, 1, 5];
const K = 8;

/**
 * Дан массив положительных целых чисел
 * Необходимо найти максимальную длинну подмассива сумма чисел которого меньше k
 */
const getMaxSubarraylength = (nums, k) => {
  let leftWindowIdx = 0,
    windowSum = 0,
    maxWindowSize = 0;
  //Идем массивом по циклу и на каждой итерации увеличиваем окно на 1 вправо
  for (let rightWindowIdx = 0; rightWindowIdx < nums.length; rightWindowIdx++) {
    //Высчитываем сумму окна
    windowSum += nums[rightWindowIdx];

    /*
     * Если сумма окна > k => мы вышли за пределы окна (окно невалидно) => необходимо сузить окно сдвигая левый индекс, пока оно не станет валидным
     */
    while (windowSum > k) {
      windowSum -= nums[leftWindowIdx];
      leftWindowIdx++;
    }

    //Находим максмальную длинну окна
    const windowSize = rightWindowIdx - leftWindowIdx + 1;
    maxWindowSize = Math.max(maxWindowSize, windowSize);
    // console.log(rightWindowIdx);
  }

  return maxWindowSize;
};

const res = getMaxSubarraylength(NUMS, K);

console.log(res);

/**
 * 1 *
 * rightWindowIdx === 0
 * window - [3]
 * maxWindowSize === 1
 * windowSum === 3
 * leftWindowIdx === 0
 * 2 *
 * rightWindowIdx === 1
 * window - [3, 1]
 * maxWindowSize === 2
 * windowSum === 4
 * leftWindowIdx === 0
 * 3 *
 * rightWindowIdx === 2
 * window - [3, 1, 2]
 * maxWindowSize === 3
 * windowSum === 6
 * leftWindowIdx === 0
 * 4 *
 * rightWindowIdx === 3
 * window - [3, 1, 2, 7]
 * maxWindowSize === 4
 * windowSum === 13
 * leftWindowIdx === 0
 * windowSum стала больше чем k => входим в цикл while и сдвигаем левый индекс пока массив не станет валиден
 *** windowSum = 10
 *** leftWindowIdx === 1
 *** windowSum = 9
 *** leftWindowIdx === 2
 *** windowSum = 7
 *** leftWindowIdx === 3
 * maxWindowSize === 3
 *
 *
 */
