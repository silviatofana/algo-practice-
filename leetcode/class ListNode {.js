class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeKLists(lists) {
    const heap = [];
    for (let head of lists) {
      if (head) {
        heap.push([head.val, head]);
      }
    }
    heap.sort((a, b) => a[0] - b[0]);
    
    const dummy = new ListNode(0);
    let tail = dummy;
    
    while (heap.length) {
      const [val, node] = heap.shift();
      tail.next = node;
      tail = tail.next;
      if (node.next) {
        heap.push([node.next.val, node.next]);
      }
      heap.sort((a, b) => a[0] - b[0]);
    }
    
    return dummy.next;
  }