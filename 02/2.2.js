const { printLinkedList, makeLinkedListFromArray } = require('../utils');

const printNthElement = (head, n) => {
  let node = head;

  for ( let i = 1; i < n; i++) {
    node = node.next;
  }

  return node.data;
}


const list = makeLinkedListFromArray(['one', 'two', 'three', 'four']);

console.log(printNthElement(list, 3))

