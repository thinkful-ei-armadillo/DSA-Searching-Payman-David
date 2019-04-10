'use strict';
const BinarySearchTree = require('./bst');

class _Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data, null, null);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
      node.previous = this.last;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (this.first !== null) {
      this.first.previous = null;
    }
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

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
    return this.deweySearch(array, dew, index + 1, end);
  } else if (item > dew) {
    return this.deweySearch(array, dew, start, index - 1);
  }
}

//searching in a bst drill
//post -order 1) 14,19,15,27,25,79,90,91,89,35

//pre-order 2) 8,6,5,7,10,9,11

function main() {
  const BST = new BinarySearchTree();
  BST.insert(25);
  BST.insert(15);
  BST.insert(50);
  BST.insert(10);
  BST.insert(24);
  BST.insert(35);
  BST.insert(70);
  BST.insert(4);
  BST.insert(12);
  BST.insert(18);
  BST.insert(31);
  BST.insert(44);
  BST.insert(66);
  BST.insert(90);
  BST.insert(22);

  //preOrder(BST);
  //inOrder(BST);
  postOrder(BST);

  /*               Captain Picard
             /                \
    Commander Riker       Commander Data
      /         \               \
 Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
 Worf        LaForge            Crusher
   /                           /
Lieutenant                  Lieutenant
security-officer            Selar*/

  const enterprise = new BinarySearchTree();
  enterprise.insert(20, 'Captain Picard');
  enterprise.insert(18, 'Commander Riker');
  enterprise.insert(21, 'Commander Data');
  enterprise.insert(17, 'Lt. Cmdr. Wolf');
  enterprise.insert(19, 'Lt. Cmdr. LaForge');
  enterprise.insert(16, 'Lieuteannt security offcier');
  enterprise.insert(23, 'Lt. Cmdr. Crusher');
  enterprise.insert(22, 'Lieutenant Selar');

  console.log(commandingOfficers(enterprise));

  console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));

  console.log(floors());

  console.log(floorsEfficient());
}

function preOrder(tree) {
  if (tree === null || tree.key === null) {
    return;
  }
  console.log(tree.key);
  preOrder(tree.left);
  preOrder(tree.right);
}

function postOrder(tree) {
  if (tree === null || tree.key === null) {
    return;
  }
  postOrder(tree.left);
  postOrder(tree.right);
  console.log(tree.key);
}

function inOrder(tree) {
  if (tree === null || tree.key === null) {
    return;
  }
  inOrder(tree.left);
  console.log(tree.key);
  inOrder(tree.right);
}

function commandingOfficers(tree, queue = new Queue(), arr = []) {
  if (tree === undefined) {
    return arr;
  }

  //const queue = new Queue();
  arr.push(tree.value);
  if (tree.left) {
    queue.enqueue(tree.left);
  }
  if (tree.right) {
    queue.enqueue(tree.right);
  }

  return commandingOfficers(queue.dequeue(), queue, arr);
}

function maxProfit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > max) {
      max = arr[i + 1] - arr[i];
    }
  }
  return max;
}

function floors(numEggs = 2, start = 1, end = 100, operations = 0) {
  //debugger;
  if (numEggs == 1) {
    while (start <= end) {
      operations++;
      if (dropEgg(start) === 'broken') {
        return start + ' ' + operations;
      } else {
        start++;
      }
    }
  } else {
    for (let i = 10; i <= 100; i = i + 10) {
      operations++;
      if (dropEgg(i) === 'broken') {
        return floors(1, i - 10 + 1, i, operations);
      }
    }
  }
}

function dropEgg(value, floorToBreak = 89) {
  if (value >= floorToBreak) {
    return 'broken';
  } else {
    return 'safe';
  }
}

function floorsEfficient(numEggs = 2, start = 1, end = 100, operations = 0) {
  if (numEggs == 1) {
    while (start < end) {
      operations++;
      if (dropEgg(start) === 'broken') {
        return start + ' ' + operations;
      } else {
        start++;
      }
    }
    return end + ' ' + operations;
  } else {
    let decreasingLevels = 14;
    for (let i = decreasingLevels; i <= 100; i = i + decreasingLevels) {
      operations++;
      decreasingLevels--;
      if (dropEgg(i) === 'broken') {
        return floorsEfficient(1, i - decreasingLevels, i, operations);
      }
    }
  }
}

main();
