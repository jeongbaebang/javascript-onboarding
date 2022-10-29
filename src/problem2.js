const copyArray = targetArray => {
  return [...targetArray];
};

const each = (iterable, func) => {
  for (const iterator of iterable) {
    func(iterator);
  }

  return;
};

const map = (array, func) => {
  const resultArray = [];

  each(array, element => resultArray.push(func(element)));

  return resultArray;
};

const convertToCharacterArray = string => copyArray(string);

const convertToString = stringArray => {
  const copyedStringArray = copyArray(stringArray);

  return copyedStringArray.join("");
};

const recursiveCheckDuplicateElement = (letterArray, currentIndex, pointArray) => {
  const maxLength = letterArray.length;
  let _nextIndexPoint = currentIndex + 1;

  if (maxLength <= currentIndex) {
    return pointArray;
  }

  if (letterArray[currentIndex] === letterArray[_nextIndexPoint]) {
    pointArray.push(currentIndex);
    _nextIndexPoint = _nextIndexPoint + 1;
  }

  return recursiveCheckDuplicateElement(letterArray, _nextIndexPoint, pointArray);
};

const updatePointIndex = (pointArray, _decrease = 2) => {
  const copiedPointArray = copyArray(pointArray);
  // 요소 제거할 때 배열의 인덱스도 당겨준다.
  const newPointIndexArray = map(copiedPointArray, point => point - _decrease);

  return newPointIndexArray;
};

/**
 * 중복되는 요소의 포인터 위치를 배열형태로 반환한다.
 * @param {string[]} stringArray
 * @returns {number[]}
 */
const checkDuplicateLetter = stringArray => {
  const duplicatePointArray = recursiveCheckDuplicateElement(copyArray(stringArray), 0, []);

  if (duplicatePointArray.length < 2) {
    return duplicatePointArray;
  }

  const [firstPoint, ...restPoint] = duplicatePointArray;
  const restPointIndexArray = updatePointIndex(restPoint);

  return [firstPoint, ...restPointIndexArray];
};

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
