const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

// js built in sort method sorts strings by default, to sort numbers 
//   sort((a,b)=> {
//     return a - b;

const bubbleSort = (arr) => {
    let sorted = false;

  
    while (!sorted) {
      sorted = true;
  
      for (let i = 0; i < arr.length - 1; i++) {
        // compare arr[i] to arr[i+1]
        if(arr[i]>arr[i+1]){
        // swap places if needed
        var temp = arr[i];
         arr[i] = arr[i+1];
         arr[i+1]= temp;
        
        // if swapped, set sorted = false to run while loop again
         sorted = false;
        }
      }
    }
  
    return arr;
  };

const quickSort = (arr) => {
    //end recursion
    if (arr.length <= 1) {
        return arr;
    }
    //use first index as pivot 
    const pivot = arr[0];
    const left = [];
    const right = [];

    //start at index 1 to ignore pivot
    for(let i =1; i < arr.length; i++) {
        // push into different arrays based on value compared to pivot
        if(arr[i] <= pivot) {
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
      return quickSort(left).concat(pivot, quickSort(right));
     
    };





  module.exports = {bubbleSort, quickSort};