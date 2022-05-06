
function findRotationCount(arr) {
  let leftIdx = 0;
  let middleIdx = Math.floor(arr.length / 2 - 1);
  let rightIdx = arr.length -1;

  if(arr[leftIdx] < arr[rightIdx]) {
    return 0
  }

  while (leftIdx <= rightIdx) {
    
    if(arr[middleIdx] > arr[middleIdx + 1]) {
      return middleIdx + 1;
    }
    // Move left 
    else if(arr[leftIdx] > arr[middleIdx]) {
      rightIdx = middleIdx - 1;
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    }

    // Move right
    else if(arr[rightIdx] < arr[middleIdx] || arr[leftIdx] === arr[middleIdx]) {
      leftIdx = middleIdx + 1;
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    } 
  }
 
  
}


module.exports = findRotationCount