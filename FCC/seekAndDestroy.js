function translatePigLatin(str) {
  
  if (str[0].match(/[aeiou]/)) {
    str = str + "way"
    // console.log(str)
  } else if (str[0].match(/[bcdfghjklmnpqrstvwxys]/gi)) {
    str = str.split("")

    // Create an array of first consonants before a vowel
    let firstConsonants = []
    for (let i = 0; i < str.length; i++) {
      firstConsonants.push(str[i]);
      if ((str[i]).match(/[aeiou]/)) {
          firstConsonants.pop()
          break;
      }
    } 
    console.log(firstConsonants)

    // using the length of first consonants
    // remove everything after the first consonants from 'str'
    // str is now contains "first consonants" only
    let afterFirstConsonants = str.splice(firstConsonants.length)  

    console.log(afterFirstConsonants)

    str = afterFirstConsonants.join("") + firstConsonants.join("") + 'ay'
    console.log(str)
  } 
  
  return str;
  
  }

  
  translatePigLatin("rhythm")
  translatePigLatin("california")
  translatePigLatin("glove")
