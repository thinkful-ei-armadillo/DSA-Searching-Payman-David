'use strict';

// To find 8:

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 3, 5, 6, 8
// 6, 8
// 8

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 12, 14, 15, 17, 18
// 17, 18
// return -1

// Dewey:

// Do a standard binary search
function deweySearch(array, dew, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length - 1 : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index].dew;
  if (item === dew) {
    for (
      let i = 1;
      array[index + i].dew === dew || array[index + i].dew === dew;
      i++
    ) {
      if (array[index + i].title === title) {
        return array[+i];
      }
      if (array[index - i].title === title) {
        return array[-i];
      }
    }
    return -1;
  } else if (item < dew) {
    return this.binarySearch(array, dew, index + 1, end);
  } else if (item > dew) {
    return this.binarySearch(array, dew, start, index - 1);
  }
}

//searching in a bst drill
//post -order 1) 14,19,15,27,25,79,90,91,89,35

//pre-order 2) 8,6,5,7,10,9,11
