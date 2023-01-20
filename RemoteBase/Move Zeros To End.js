/* 
0040760889756
silviatofana


input:  arr =  [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]



i = 2, 0
j = length, 7

*/

function moveZerosToEnd(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	*/

	// your code goes here
  let j=0, temp, i;
  for(let i=0; i<arr.length; i++){
    if(arr[i] != 0 &&barr[j]== 0){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
     if(arr[j] != 0){
       j++;
     }
    }
  }
  
    function printArray(arr){
      for(let i=0; i<arr.length; i++){
        document.write(arr[i], "");
        
      }
    }
      
      //let arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0];
      //let n = arr.length;
     
      //document.write("Array after pushing all zero to the end of array: <br>");
      //printArray(arr);
  
      //moveZerosToEnd(arr);
  
     //document.write("Modify Array: <br>");
    // printArray(arr);
  
  
---Move Zeros To End----
Ad-Hoc Solution: If the left-most integer in the array is nonzero, it is already correctly placed, and we can consider the subarray that doesn’t include that integer. Otherwise, we want to move the left-most nonzero integer into that position.

A naive solution based on the above, looks as follows:

function moveZerosToEnd(array):
    for i from 0 to array.length - 1:
        if array[i] == 0:
            for j from i+1 to array.length - 1:
                if array[j] != 0:
                    array[i], array[j] = array[j], array[i]
                    break

    return array
Say we are considering the subarray at index i or larger. If we find the next non-zero element naively, our solution will have O(N^2) time complexity, where N is the number of elements in our array, as when there are a lot of zeroes, we will spend a lot of time seeking nonzero integers in the “for j from i+1 to array.length - 1” loop.

Instead, we need to maintain two pointers: a write-head, and a read-head. The read-head will read each nonzero element from left to right, and we will write those values to the write-head, then increment the write-head.

At the end, the remaining elements need to be made zero.

function moveZerosToEnd(array):
    write = 0
    for read from 0 to array.length - 1:
        if array[read] != 0:
            array[write] = array[read]
            write += 1

    for i from write to array.length - 1:
        array[i] = 0

    return array
We could also make this slightly cleaner by using an idea similar to quickselect, partitioning the array by nonzero-ness. Here, once the first zero has been found, the write-head will be on the left-most zero, and the read-head will be active on the first non-zero element to the right of the write-head. The situation in general will look as follows when we enter the if block:

heads: _ _ _ w _ _ r _ _
array: 1 2 3 0 0 0 4 5 6
Here, instead of writing array[write] = 4, we will swap array[write] and array[read]. At the end, the remaining elements need to be made zero since we already wrote the non-zero elements at the beginning of the array.

function moveZerosToEnd(array):
    write = 0
    for read from 0 to array.length - 1:
        if array[read] != 0:
            array[read], array[write] = array[write], array[read]
            write += 1

    return array
Working through an example, say we have an array [1, 0, 2, 0, 3].

- When read = 0, write = 0 and write += 1.
- When read = 1, then array[read] == 0 and write = 1.
- When read = 2, then we swap array[2] (read) and array[1] (write). The array is now [1, 2, 0, 0, 3] and write = 2.
- When read = 3, array[read] == 0 and we skip.
- When read = 4, then we swap array[4] (read) and array[2] (write). The final array is [1, 2, 3, 0, 0].
Time Complexity: O(N), where N is the length of arr. We have one loop along this array, doing operations which are all constant time. So it takes O(N) time.

Space Complexity: O(1). No additional space is used besides the pointers “read” and “write”, which in total has complexity O(1).