

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
      return [];
  }
  
  if (matrix.length === 1) {
      return matrix[0];
  }
  
  if (matrix[0].length === 1) {
      return matrix.reduce((acc, row) => {
          return [...acc, ...row];
      }, []);
  }


  const lastRowIndex = matrix[0].length - 1;
  const lastColumnIndex = matrix.length - 1;
  
  const getElement = (row, column) => {
      if (matrix[row] === undefined) {
          return undefined;
      }

      return matrix[row][column];
  }
  
  
  // create array to store cursor and initalize with 0, 0
  let rowIndex = 0;
  let columnIndex = 0;
  
  // create array to store elements
  const elements = [];
  
  // decleare a variable to track when the end is reached
  let endReached = false
  
  // declare a variable to track direction
  let isGoingUp = true;
  
  // declare variable to track if cursor has reach end of column
  // (that will define top calculations)
  let lastRowReached = false;
  
  // declare variable to track if cursor has reach end of rows
  // (that will define top calculations)
  let lastColumnReached = false;
  
  // iterate through elements until there are none defined
  while (!endReached) {
      const noElementsBelow = getElement(rowIndex + 1, columnIndex) === undefined;
      const noElementsToTheRight = getElement(rowIndex, columnIndex + 1) === undefined;
      
      const element = matrix[rowIndex][columnIndex];

      // add element to the elements
      elements.push(element)
      
      if (noElementsBelow && noElementsToTheRight) {
          endReached = true;
          continue;
      }

      // if the row cursor is the matrix width - 1 and  endOfRowsReached = false
      if (rowIndex === lastRowIndex) {
          // endOfRowsReached = true  
          lastRowReached = true;
      }

      // if the row cursor is the matrix width - 1 and  endOfColumnsReached = false
      if (columnIndex === lastColumnIndex) {
           // endOfColumnsReached = true
          lastColumnReached = true
      }

      // declare variable to store if element should switch directions and assing false
      let shouldSwitchDirections = false;
      
      // if isGoingup is true
      if (isGoingUp) {
          // if lastColumnReached
          if (lastColumnReached) {         
              // shouldSwitchDirections is true if there is no element to the right
              shouldSwitchDirections = getElement(rowIndex, columnIndex + 1) === undefined;
          // otherwise
          } else {
              // shouldSwitchDirections is true if there is no element above 
              shouldSwitchDirections = getElement(rowIndex - 1, columnIndex) === undefined;
          }
          
          // if shouldSwitchDirections
          if (shouldSwitchDirections) {
              // changeDirections
              isGoingUp = false;

              // if lastColumnReached is true
              if (lastColumnReached) {
                  // move cursor down 1
                  rowIndex = rowIndex + 1;
                  continue;
              // otherwise
              } else {
                  // move cursor to the right
                  columnIndex = columnIndex + 1;
                  continue;
              }
          }
          
          // move cursor up and to the right
          rowIndex -= 1;
          columnIndex += 1;

          continue;
      }
      
      // if goingUp is false
      
      // if lastRowReached
      if (lastRowReached) {
          // shouldSwitchDirections is true if there are no items below
          shouldSwitchDirections = getElement(rowIndex + 1, columnIndex) === undefined
      } else {
          // shouldSwitchDirections is true if there are no elements to the left
          shouldSwitchDirections = getElement(rowIndex, columnIndex - 1) === undefined
      }

      // if shouldSwitchDirections
      if (shouldSwitchDirections) {
          // changeDirections
          isGoingUp = true;
  
          // if endOfColumnsReached
          if (lastRowReached) {
              // move to the right
              columnIndex += 1;
              continue;
          } else {
              // move down
              rowIndex += 1;
              continue;
          }
      }
      
      // move down and to the left
      rowIndex += 1;
      columnIndex -= 1;
  }
  
  return elements;
};

// const arr = [[1,2,3],[4,5,6],[7,8,9]];
const arr = [[2,5],[8,4],[0,-1]];

console.log(findDiagonalOrder(arr));