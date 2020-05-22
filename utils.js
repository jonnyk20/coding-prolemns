class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }

  addToTail = (node) => {
    this.next = node;
  }
}

const print = data => console.dir(data, { depth: null });

const makeLinkedListFromArray = (arr) => {
  const head = new Node(arr[0]);
  let currentNode = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i]);;
    currentNode.addToTail(newNode);
    currentNode = newNode;
  }

  return head
}

const printLinkedList = (head) => {
  const output = [];
  let node = head;

  while (node !== null ) {
    output.push(node.data);
    node = node.next;
  }

  console.log(output.join(', '))
};

module.exports = {
  makeLinkedListFromArray,
  printLinkedList,
  print
}