function countZeroes(arr) {
  // we need to use binary search to find the last trailing 1 in the array, then return the length of the array - the next index over.
  let middleIdx = Math.floor(arr.length / 2 - 1);
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while(leftIdx <= rightIdx) {
    console.log(`leftIdx: ${leftIdx} rightIdx: ${rightIdx}`);
    // if middle === 1, move up
    if(arr[middleIdx] === 1) {
      // left is now middle.
      leftIdx = middleIdx + 1;
      // set middle to be 1/2 between left and right idx
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      // console.log(`L ${leftIdx} R ${rightIdx}`)
      // console.log(middleIdx)
    }
    else if (arr[middleIdx] === 0 && arr[middleIdx - 1] === 0) {
      // right is now middle
      rightIdx = middleIdx - 1;
      middleIdx = Math.floor(leftIdx + rightIdx) / 2;
      
    }
    else if (arr[middleIdx] === 0 && arr[middleIdx - 1] === 1) {
      
      return (arr.length - middleIdx);
    }
    // if all zeroes
    else if (arr[middleIdx] === 0 && arr[middleIdx - 1] === undefined) {
      
      return (arr.length - middleIdx);
    }
  }
  return 0

}

module.exports = countZeroes