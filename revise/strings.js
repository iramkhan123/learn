//string could be either represented using " " or ' '
//better to use `` as it provide string interpolation

/*const name="iram";
console.log(`my name is ${name}`);*/

const gamename=new String('chess');

//*when we use new keyword we are occupying the memory in heap but we know that only non primitive type like array,object,function occupy spaces in heap, so in here though the string is actually an object

//if we try to run this in console of web browser we will be able to see the string as object and can use varieies of method along with it
// so to use string either we give string in single quote , double quote, back tick or also use object of string
console.log(typeof gamename);//object
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());

//touppercase() is a function but this function isnt going to convert the original string 
console.log(gamename);//[String: 'chess'],
/*
output: by using new string() this variable game name is not a string but is of object type 
object
c
5
CHESS
[String: 'chess']
*/
/*console.log(name[0]);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name);*/
/* output
i
4
IRAM
iram*/


/*let anothergame=gamename;
console.log(anothergame);
anothergame[0]='r';
console.log(anothergame);
console.log(gamename);*/

//note 5 -> It's important to know that in JavaScript, strings are immutable.
// This means that once a string is created, its contents cannot be changed. Instead, you must create a new string representing the modified version when you want to modify a string.

let str="iramkhan";
str[0]='e';
console.log(str);

//we cannot change the value of string once it is created,

//some methods in strings are indexof,charat,touppercase,tolowercase(),str.substring(startingindex,endingindex)
/*console.log(str.charAt(2));
console.log(str.indexOf('m'));

const firstname=str.substring(0,4);

console.log(firstname);

console.log(str.substring(0,4));
*/

/*
use of slice 
If start is omitted or undefined, slice() starts from the beginning of the array.
If end is omitted or undefined, slice() extracts up to the end of the array.
slice() is commonly used for creating shallow copies of arrays or extracting portions of 
arrays without modifying the original.
->difference with slice() and substring() is substring can only be used with string whereas slice can be used with string as well as array
->both are used to create shallow copy
in substring we can only use positive values as starting and ending index where as in slice we can also use negative values as starting index and ending index in which -1 represent from the end -2 means 2nd last


int slice(startingindex,endingindex);
str.slice(0,4)->iram
str.slice(-4,-2)->kh(from end -4=k because last char is represented by -1 , 2nd last by -2)and we know second index represent ending index excluding that character
*/


/*let lastname=str.slice(-4,-2);//kh
console.log(lastname)

lastname=str.slice(-7,4);
console.log(lastname);//ram
lastname=str.slice(-8,4);//iram
console.log(lastname);*/

//if we try to use ngative with substring it will by default consider negative as 0 when starting index is negative

//trim remove the whitespace of starting and end only

let s='       iram k    ';
console.log(s.trim());

str="i am iram khan and i am of 24 years old";
//str.replace("the one that has to be replaced","with what it should be replaced");
//A string pattern will only be replaced once. though doesnt matter how much occurence we have of the pattern 

console.log(str.replace('i','me'));

//if we want that all the occurence of it should be replaced we can use replaceAll();

//includes() return true if you want to find whther this string is present in your string 

console.log(str.includes('iram'));

/*
SPLIT()

The split() method of String values takes a pattern and divides this string into an ordered 
list of substrings by searching for the pattern, puts these substrings into an array, and returns
 the array.

 on what basis you want the string to be splitted

 split(separator)

*/
console.log(str.split(' '));

