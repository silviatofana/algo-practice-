const reverseStr = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string' ) {
      return 'Something went wrong'
  }

  const backwards = [];
  const length = str.length;
  const totalItems = str.length - 1;

  for (let i = length; i >= 0; i--) {
      backwards.push(str[i])
  };

  console.log(backwards);

  return backwards.join('');

}

console.log(reverseStr('top'))
// reverseStr(8)