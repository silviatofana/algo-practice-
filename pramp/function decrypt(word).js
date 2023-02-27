/*
input:  word = "dnotq"
output: "crime"

input:  word = "flgxswdliefy"
output: "encyclopedia"

For instance, to encrypt the word “crime”

Decrypted message:	c	   r	 i	 m	 e
Step 1:	           99	  114	105	109	101
Step 2:	           100	214	319	428	529
Step 3:	           100	110	111	116	113
Encrypted message:	d	   n	 o	  t	 q

214 - x*26 < z
214 - 26 
188 - 26
162 - 26
136 - 26  136< 123   97(a)+26 =123(z) 
110 < 123--

while num> ord(z)
  num-=26

https://commons.wikimedia.org/wiki/File:ASCII-Table-wide.svg

for i from 0 to word.length - 1:
  newLetterAscii = asciiValue(word[i])
  newLetterAscii = newLetterAscii - secondStep

  while (newLetterAscii < asciiValue('a')):
      newLetterAscii += 26

  decryption = decryption + asciiToChar(newLetterAscii)
  secondStep += newLetterAscii

Microverse 

https://chat.openai.com/chat


----------------------------------------------
An infamous gang of cyber criminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking, has recently become a target for the FBI. After intercepting some of their messages, which looked like complete nonsense, the agency learned that they indeed encrypt their messages, and studied their method of encryption.

Their messages consist of lowercase latin letters only, and every word is encrypted separately as follows:

Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.

For instance, to encrypt the word “crime”

Decrypted message:	c	r	i	m	e
Step 1:	99	114	105	109	101
Step 2:	100	214	319	428	529
Step 3:	100	110	111	116	113
Encrypted message:	d	n	o	t	q
The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that receives a string that consists of small latin letters only, and returns the decrypted word.

Explain your solution and analyze its time and space complexities.

input:  word = "dnotq"
output: "crime"

input:  word = "flgxswdliefy"
output: "encyclopedia"



function decrypt(word) {
    let secondStep = 1;
    let decryption = "";

    for (let i = 0; i < word.length; i++) {
        let newLetterAscii = word.charCodeAt(i);
        newLetterAscii = newLetterAscii - secondStep;

        while (newLetterAscii < 'a'.charCodeAt(0)) {
            newLetterAscii += 26;
        }
        decryption += String.fromCharCode(newLetterAscii);
        secondStep += newLetterAscii;
    }

    return decryption;
}

function decrypt(word){
    secondStep = 1;
    decryption = "";
      
    for(i=0; i<word.length - 1;i++){
        newLetterAscii = asciiValue(word[i]);
        newLetterAscii = newLetterAscii - secondStep;

        while (newLetterAscii < asciiValue('a')){
            newLetterAscii += 26;
         
        decryption = decryption + asciiToChar(newLetterAscii);
        secondStep += newLetterAscii;
        }
    }
    return decryption;
}




An infamous gang of cyber criminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking, has recently become a target for the FBI. After intercepting some of their messages, which looked like complete nonsense, the agency learned that they indeed encrypt their messages, and studied their method of encryption.

Their messages consist of lowercase latin letters only, and every word is encrypted separately as follows:

Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.

For instance, to encrypt the word “crime”

Decrypted message:	c	r	i	m	e
Step 1:	99	114	105	109	101
Step 2:	100	214	319	428	529
Step 3:	100	110	111	116	113
Encrypted message:	d	n	o	t	q
The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that receives a string that consists of small latin letters only, and returns the decrypted word.

Explain your solution and analyze its time and space complexities.

input:  word = "dnotq"
output: "crime"

input:  word = "flgxswdliefy"
output: "encyclopedia"


write in javascript


 change this code to javascript:

function decrypt(word):
    secondStep = 1
    decryption = ""

    for i from 0 to word.length - 1:
        newLetterAscii = asciiValue(word[i])
        newLetterAscii = newLetterAscii - secondStep

        while (newLetterAscii < asciiValue('a')):
            newLetterAscii += 26
         
        decryption = decryption + asciiToChar(newLetterAscii)
        secondStep += newLetterAscii

    return decryption

*/

function decrypt(word) {
    let secondStep = 1;
    let decryption = "";

    for (let i = 0; i < word.length; i++) {
        let newLetterAscii = word.charCodeAt(i);
        newLetterAscii = newLetterAscii - secondStep;

        while (newLetterAscii < 'a'.charCodeAt(0)) {
            newLetterAscii += 26;
        }
        decryption += String.fromCharCode(newLetterAscii);
        secondStep += newLetterAscii;
    }

    return decryption;
}







/*function decrypt(word) {
    let decrypted = [word.charCodeAt(0) - 1];
    for (let i = 1; i < word.length-1; i++) {
        let code = word.charCodeAt(i) - decrypted[i - 1];
        while (code < 97) {
            code += 26;
        }
        decrypted.push(code);
    }
    return String.fromCharCode(...decrypted);
}*/











