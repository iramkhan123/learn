/*console.log('hey');
console.log("5"+4+7);
console.log(6+7+"5");
let num=1234;
console.log(typeof num);
num="eruk";
console.log(typeof num);
console.log(typeof undefined);
console.log(typeof null);
//typef null is always object
let score="123";
let num1=Number(score);
console.log(typeof num1);
console.log(num1);

score="234iram";
num1=Number(score);
console.log(num1);
console.log(typeof num1);

score=false;
num1=Number(score);
console.log(num1);


//converting into number
//string "123"->123
//"irk"->Nan(not a number);
//boolean type into number
//false -> 0
//true -> 1


//conversion number to boolean
//1->true
//0->false
//conversion of string to boolean
//""->false;
//"iram"->true;


let value=234;
let flag=Boolean(value);
console.log(flag);
value="ery";
flag=Boolean(value);
console.log(flag);*/

/*let str="";
let num1=Number(str);
console.log(num1);
num1=Boolean(str);
console.log(num1);
console.log(+true);
console.log(+"");
// when arithmetic operator is used with some data type which isnt integer so it tries to convert that datatype to first an integer
//here true->1 , ""->0
console.log(+"mine");
//mine has to be converted to an integer SO we have "NAN" as answer
console.log(+"123");
*/
//comparison on same data type will give predicatble result
/*console.log(1==2);
console.log(2>1);
//when conparison on different data type then result aint predictable

console.log("2">1);
console.log("02">1);

//comparosn with null

// equality == works differently than the comaprison such as >,<,>=,<=
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//no matter how we compare undefined with 0 its value can never be converted to integer or 0, whereas null means an empty value missing value so it can convert
//itself to 0 when used with comparison opeator
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);
*/

const num=123;

//we never told what type the variable is going to be its by default taken as number , here javascript is a dynamica;;y typed language
let n=12.3
//here n is decimal but a type of number

//data type is going to be either primitive or non primitive/referenc value;

//primitive-> number,string,boolean,null,undefined,symbol,bigint, primitive is call by value type of integer
//non primitve is something which is actually a call by referenc
//array, object , function



/*let arr=[123,456,980,123];
let heros=["batman","superman","captain america"];
console.log(arr);
console.log(heros);

let obj={
    name:"maddy",
    age:23,
    address:"street 1"
};
console.log(obj);
console.table(arr);
console.table(obj);
*/
/*let id=Symbol("123");
let aid=Symbol("123");
console.log(id===aid);
//though "123" is same in both when converted to symbol stil there will be false 
console.log(id);//->Symbol(123)
console.log(aid);//->Symbol(123)
//still when compared values aint equal
console.log(aid==id);*/



const myfunction= function(){

    console.log("mine");
}
myfunction();