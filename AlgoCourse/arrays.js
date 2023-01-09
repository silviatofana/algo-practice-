const strings = ['a', 'b', 'c', 'd'];

//access
strings[2] //O(1)
//push
strings.push('e'); //O(1)

//pop
strings.pop();
strings.pop(); //O(1)

//unshift
strings.unshift('x'); // O(n) requires iteration to reassign index

//splice

strings.splice(2, 0, 'alien'); // O(n)

console.log(strings)

