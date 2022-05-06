function findFloor(arr, target) {
  // returns the biggest number that is still smaller than the given value

  let leftIdx = 0;
  let middleIdx = Math.floor(arr.length / 2);
  let rightIdx = arr.length - 1;

  while(leftIdx <= rightIdx) {
    //check
    if(arr[middleIdx] === target || arr[middleIdx] < target && arr[middleIdx + 1] > target || arr[middleIdx] < target && arr[rightIdx] === arr[middleIdx]) {
      return arr[middleIdx];
    }
    // move left
    else if(arr[middleIdx] > target) {
      rightIdx = middleIdx - 1;
      middleIdx = Math.floor(leftIdx + rightIdx) / 2;
    }
    //move right
    else if(arr[middleIdx] < target) {
      leftIdx = middleIdx + 1;
      middleIdx = Math.floor(leftIdx + rightIdx) / 2;
    }
  }

  return -1
}

module.exports = findFloor