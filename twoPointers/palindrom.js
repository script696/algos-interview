const STR_MOCK = "abcdcba";

const checkPalindrom = (str) => {
  let leftIdx = 0;
  let rightIdx = str.length - 1;

  while (leftIdx < rightIdx) {
    if (str[leftIdx] !== str[rightIdx]) {
      return false;
    }
    leftIdx++;
    rightIdx--;
  }
  return true;
};

const res = checkPalindrom(STR_MOCK);

console.log(res);
