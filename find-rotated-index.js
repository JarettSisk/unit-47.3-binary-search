function findRotatedIndex(arr, val) {
  let leftIdx = 0;
  let middleIdx = Math.floor(arr.length / 2 - 1);
  let rightIdx = arr.length -1;

  // initial step
  // move left
  if(arr[leftIdx] <= val && arr[middleIdx] !== val) {
    console.log('moving left in ' + middleIdx )

    rightIdx = middleIdx - 1;
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);

  }
  // move right
  else if(arr[rightIdx] >= val && arr[middleIdx] !== val) {
    console.log('moving right in ' + middleIdx)

    leftIdx = middleIdx + 1;
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);

  } 

  while(leftIdx <= rightIdx) {
    // move left
    if(arr[middleIdx] > val) {
      rightIdx = middleIdx - 1;
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      console.log('moving left ' + middleIdx )

    }
    // move right
    else if(arr[middleIdx] < val ) {
      leftIdx = middleIdx + 1;
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      console.log('moving right ' + middleIdx)

    } 
    
    else if (arr[middleIdx] === val) {
      console.log("success")
      return middleIdx;
    }
  }
  console.log("fail")
  return -1;
}

// findRotatedIndex([3, 4, 1, 2], 4)
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 2)
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)
// findRotatedIndex([37, 44, 66, 102, 10, 22], 14)
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)

module.exports = findRotatedIndex