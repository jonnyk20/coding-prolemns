const { printLinkedList, makeLinkedListFromArray } = require('../utils');

const reverseLinkedList = (originalHead) => {

  if (originalHead.next === null) {
    return originalHead;
  }

  // declare variable to track new head
  let head = originalHead;

  // declare variable to track current Node
  let currentNode = originalHead;

  // declare variable for temporary storage
  let temp = null;
  
  while (currentNode.next !== null) {
    // assign the node after the current one to the temp variable
    temp = currentNode.next

    // link the current node to the next node of the temp variable
    currentNode.next = temp.next;

    // link the temp to the latest head
    temp.next = head;

    // assign temp to head
    head = temp;
  }

  return head;

};

printLinkedList(reverseLinkedList(makeLinkedListFromArray([1, 2, 3, 4, 5, 6, 7])));