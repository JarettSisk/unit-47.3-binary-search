
function sortedFrequency(arr, target) {
  let start = getStart(arr, target);
  if (start === -1) {
    return start
  }
  let end = getEnd(arr, target);
  console.log(`Start: ${start} End: ${end}`)
  return  (end - start + 1);

}

function getStart(arr, target) {
  let middleIdx = Math.floor(arr.length / 2 - 1);
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while(leftIdx <= rightIdx) {
    if(arr[middleIdx] < target ) {
      // set left to be middle
      leftIdx = middleIdx + 1;
      // set the new middleIdx
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    }
    else if(arr[middleIdx] > target || arr[middleIdx - 1] === target) {
      // set rightIdx to be middle
      rightIdx = middleIdx - 1;
      // set the new middleIdx
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    }
    else if (arr[middleIdx] === target && arr[middleIdx - 1] !== target) {
      return middleIdx;
    }
  }
  return -1;
}

function getEnd(arr, target) {
  let middleIdx = Math.floor(arr.length / 2 - 1);
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while(leftIdx <= rightIdx) {
    if(arr[middleIdx] < target || arr[middleIdx + 1] === target) {
      // set left to be middle
      leftIdx = middleIdx + 1;
      // set the new middleIdx
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    }
    else if(arr[middleIdx] > target ) {
      // set rightIdx to be middle
      rightIdx = middleIdx - 1;
      // set the new middleIdx
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    }
    else if (arr[middleIdx] === target && arr[middleIdx + 1] !== target)  {
      return middleIdx;
    }
  }
  return -1;
}
console.log(sortedFrequency([1, 2, 2, 2, 3], 1))

module.exports = sortedFrequency