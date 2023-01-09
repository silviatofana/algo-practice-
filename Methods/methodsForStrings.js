// ... : Variadic (As many args as memory can handle) 
// [arg] : Optional Argument

charAt(index) // Returns the character at the specified index (position)
charCodeAt(index) // Returns the Unicode of the character at the specified index
concat(str1) // Joins two or more strings, and returns a new joined strings
endsWith(searchVal,[length]) // Checks whether a string ends with specified string/characters
fromCharCode(n1) // Converts Unicode values to characters
includes(searchVal,[start]) // Checks whether a string contains the specified string/characters
indexOf(searchVal,[start]) // Returns the position of the first found occurrence of a specified value in a string
lastIndexOf(searchVal,[start]) // Returns the position of the last found occurrence of a specified value in a string
localeCompare(str) // Compares two strings in the current locale
match(regex) // Searches a string for a match against a regular expression, and returns the matches
repeat(count) // Returns a new string with a specified number of copies of an existing string
replace(searchVal,newVal) // Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search(searchVal) // Searches a string for a specified value, or regular expression, and returns the position of the match
slice(start,[end]) // Extracts a part of a string and returns a new string
split([separator],[limit]) // Splits a string into an array of substrings
startsWith(searchVal,[start]) // Checks whether a string begins with specified characters
substr(start,[length]) // Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring(start,[end]) // Extracts the characters from a string, between two specified indices
toLocaleLowerCase() // Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase() // Converts a string to uppercase letters, according to the host's locale
toLowerCase() // Converts a string to lowercase letters
toString() // Returns the value of a String object
toUpperCase() // Converts a string to uppercase letters
trim() // Removes whitespace from both ends of a string
valueOf() // Returns the primitive value of a String object