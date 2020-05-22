const { printLinkedList, makeLinkedListFromArray } = require('../utils');

const removeDuplicates = (head) => {
  let currentNode = head;
  // initiat previousMode variable and assing null
  let previousNode = null;

  // make a set to store unique values
  const values = new Set()


  // walk through list
  while (currentNode !== null) {
    if (previousNode === null || !values.has(currentNode.data)) {
      values.add(currentNode.data);
      previousNode = currentNode;
    } else {
      previousNode.next = currentNode.next;
    }
  
    currentNode = previousNode.next;
  }

  return head;
};

const newList = makeLinkedListFromArray([9, 6, 1, 2, 9, 3, 4, 6, 4])
printLinkedList(removeDuplicates(newList));
