export function binary_search(arr, ele) {
  let low = 0,
    high = arr.length,
    flag = true;
  while (low <= high) {
    let mid = low + (high - low) / 2;
    if (arr[mid] === ele) {
      console.log(
        `The element ${ele} is found at index ${mid} inside array ${arr}`
      );
      flag = false;
      break;
    } else if (arr[mid] > ele) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (flag) {
    console.log(`The element ${ele} is not found in the array ${arr}`);
  }
}
