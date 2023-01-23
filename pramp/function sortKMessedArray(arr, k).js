/*
silviatofana

Approach
An initial approach would be to sort the array using mergeSort or Javascript's sort method, in nlog(n) time. However, this would ignore that fact that the array is already mostly sorted (k-sorted), resulting in a less optimal solution.

Another approach utilizes the k values, by finding the minimum of the k values (a window of k values) in front of an element, and comparing its minimum to the element, swapping places if needed. This would be done in O(nk) time, since for every element in the n length array, you need to loop through k values to obtain the minimum. But we can do better.

k provides a plus/minus deviation from the actual index, providing 2k + 1 options for every element. However, if we can guarantee that the first index's value is sorted, then this becomes k + 1 options for the next element. How can we guarantee that?

'Sliding Window' Sub-array
The 1st number in the array can be in any position from 0 to k, since there are no negative indices.

Consider a sub-array of that length, k + 1, filled with the first k + 1 values in the array. You can sort the value into the first index correctly, since you know each element is within k indices of its final sorted index. We can then 'slide' the sub-array one index over and repeat to find the smallest element until the entire array has been traversed.

const arr = [2,4,1,3];
const k = 2; 

const window = [2,4,1]; //sub-array from index 0 of length K+1
//Sort the first index
window =  [1,2,4]

//Now slide the window down 1 index to the right.
window => [2,4,3]

//repeat until the full array is traversed
This problem requires the output to be a sorted array from smallest to largest. In order to assume that this window will always be able to sort the smallest value, insertion into this array also needs to be 'sorted' from the beginning.

Binary Heap
A data structure that takes advantage of this insertion method is the minimum heap. Heaps are a data structure that, like regular binary trees, will take in data and insert the node in the tree based on comparisons to the other node's values. In a minimum heap, the node parent is always smaller than its children, resulting in the smallest value being at the top of the heap.

To apply this to the sliding window, we can create a minimum heap of size k + 1, and fill it with the first k + 1 elements of the array. Once the heap is built, take the minimum (i.e. the node at the top of the heap) out and place that back into the original array. Slide your sub-array one index over, add that new value to the heap, and again remove the new minimum to place back into the array. Repeat the process until you have traversed the entire array.

To get the last elements out of the heap, the heap itself needs to be traversed to sort the remaining k + 1 elements into the result array.

https://drive.google.com/file/d/1gxK_Y6JRs_Uv98FunobtZSKrbfFWrA-g/view
0040760889756
input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Pseudocode:
function sortKMessedArray(arr, k):
    n = arr.length
    // create an empty min-heap
    h = new MinHeap()
    // build the min-heap from the first k+1 elements of arr
    h.buildHeap(arr[0,...,k])
    for i from k+1 to n-1:
        // extract the top element from the min-heap and
        // assign it to the next available array index
        arr[i-(k+1)] = h.extractMin()
        // push the next array element into the min-heap
        h.insert(arr[i])
    // extract all remaining elements from the min-heap
    // and assign them to the next available array index
    for i from 0 to k:
        arr[n-k-1 + i] = h.extractMin()
    return arr
    Time Complexity: building a heap takes O(K) time for K+1 elements. 
    Insertion into and extraction from the min-heap take O(log(K)), each. Across all three loops, we do at least one of these actions N times, so the total time complexity is O(N⋅log(K)). if K is substantially smaller than N, then we can consider log(K) constant and argue that the complexity is practically linear.
*/

function sortKMessedArray(arr, k) {
    // your code goes here
    const heap = new MinHeap();
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      heap.insert(arr[i]);
      if (i >= k) {
        result.push(heap.extract());
      }
    }
    while (heap.size() > 0) {
      result.push(heap.extract());
    }
    return result;
  }
  
  /* function sortKMessedArray(arr, k) {
    let heapArr = new MinHeap();
    
    //iterate through the heapArr of k + 1 indices to guarantee the sorting of the *smallest* number.
    for (let i = 0; i <= k; i++) {
      heapArr.insert(arr[i]);
    }
  
    //iterate through the rest of the array and
     mutate the array from the beginning 
     while changing the heap
    for (let i = k + 1; i < arr.length; i++) {
      arr[i - (k + 1)] = heapArr.popMin();
      heapArr.insert(arr[i]);
    }
  
    //iterate through the heap to sort the k + 1 remaining elements
    for (let i = k; i >= 0; i--) {
      arr[arr.length - 1 - i] = heapArr.popMin();
    }
    return arr;
  }
  */