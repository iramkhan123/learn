console.log('hey');
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
console.log(flag);