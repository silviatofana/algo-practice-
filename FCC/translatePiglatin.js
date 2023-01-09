function translatePigLatin(str) {

// console.log(str)
  if (str[0].match(/[aeiou]/)){
    str = str + "way"
  } else if (str[0].match(/[bcdfghjklmnpqrstvwxys]/gi)) {
    console.log(str)

    let consonants = [];

    str = str.split("") // converts str to arry
    // console.log(str)

    for (let i = 0; i < str.length; i++) {
      consonants.push(str[i])
      if (str[i].match(/[aeiou]/)) {
        consonants.pop()
        break;
      }
    }

    
    console.log(consonants)
    
    // lett
    let afterConsonants = str.splice(consonants.length)
    str =  afterConsonants.join("") + consonants.join("") + "ay"
    // console.log(str)
  }






  return str;
}

translatePigLatin("eight");
translatePigLatin("california")
translatePigLatin("glove")
translatePigLatin("paragraphs")
translatePigLatin("schwartz")
translatePigLatin("rhythm")