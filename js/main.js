//JS string methods
//store a string in a variable
var name = "Koby Bean Bryant";
//console the result of the methods
console.log(name.toUpperCase());
//change the variable
name = name.toUpperCase();
//look at the variable
console.log(name);


//store a string in a variable
var name1 = "Mika Micheal Biton Spence";
//console the result of the methods
console.log(name1.toLowerCase());
//change the variable
name1 = name1.toUpperCase();
//look at the variable
console.log(name1);

//store a string in a variable
var name2 = "Malcom Micah Biton Spence";
//console the result of the method on the string
console.log(name2.charAt(5));

//store a string in a variable
var name3 = "Myla Biton Spence II";
//console the result of the method on the string
console.log(name3.charAt(name3.length - 1));

//store a string in a variable
var name4 = "Moses Mika Biton Spence";
//console the result of the method on the string
console.log(name4.indexOf('e'));

//store a string in a variable
var name5 = "Mallory Mika Biton Spence";
//create an arrya of letter from the string using the string method
var nameArray = name5.split("");
//console the result of the method on the string
console.log(nameArray);


//store a string in a variable
var name6 = "Mel Myla Biton Spence";
//create an array of letters from the string method using the split method
var name6Array = name6.split(" ");
//loop through the array
for (var i = 0; i < name6Array.length; i++){
  console.log(name6Array[i]);
};


//store a string in a variable
var name7 = " Misa Mica Micheal Spence";
//create an array of words from the string using the split method
var name7Array = name7.split(" ");
//loop throught the array
for (var i = 0; i < name7Array.length; i++){
  console.log(name7Array[i]);
}
//recreate the original array
name7Array = name7Array.join(" ");
console.log(name7Array);
