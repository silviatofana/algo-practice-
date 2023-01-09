function processData(input) {
    //Enter your code here
    // console.log(input)
    const a = input.split(/\r?\n/);
    for (let i = 0; i < a.length; i++) {

        let input = a[i]

        let operationSC = input.substring(0, 1);
        let methodClassVariable = input.substring(2, 3)
        let wordFromInput = input.substring(4)

        if (operationSC === 'S') {
            if (methodClassVariable === 'C') {
                let result = '';
                // split words in word to split by capital letter
                let words = wordFromInput.split(/(?=[A-Z])/);
                for (let i = 0; i < words.length; i++) {
                    result += words[i].toLowerCase() + ' ';
                }
                console.log(result.trim());
            } else if (methodClassVariable === 'M') {
                let result = '';
                // split words in word to split by capital letter
                let words = wordFromInput.split(/(?=[A-Z])/);
                for (let i = 0; i < words.length; i++) {
                    result += words[i].toLowerCase() + ' ';
                }
                let indexOfParenthesis = result.indexOf('(');
                console.log(result.trim().substring(0, indexOfParenthesis));
            } else {
                let result = '';
                // split words in word to split by capital letter
                let words = wordFromInput.split(/(?=[A-Z])/);
                for (let i = 0; i < words.length; i++) {
                    result += words[i].toLowerCase() + ' ';
                }
                console.log(result.trim());
            }
        } else if (operationSC === 'C') {
            if (methodClassVariable === 'C') {
                let result = input.split(' ').map(word => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }).join('');
                console.log(result.substring(4, 5).toUpperCase() + result.substring(5))
            } else if (methodClassVariable === 'M') {
                let result = input.split(' ').map(word => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }).join('') + '()';
                console.log(result.substring(4))
            } else {
                let result = input.split(' ').map(word => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }).join('');
                console.log(result.substring(4, 5) + result.substring(5))
            }
        }
    }
}


processData('S;V;iPad\n' +
    'C;M;mouse pad\n' +
    'C;C;code swarm\n' +
    'S;C;OrangeHighlighter\n' + 'S;M;plasticCup()\n' + 'S;V;pictureFrame\n' + 'C;V;mobile phone\n' + 'C;C;coffee machine\n' + 'C;M;white sheet of paper')