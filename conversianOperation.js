// let score=undefined;    //NaN output
// let score=null;         //output 0
// let score="33abc";         //NaN output
// let score=true;          //output 1
//let score=false;          //output 0
// let score="Farhan"       //output NaN
// let score="33"          //output 33
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber=Number(score);
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

let isLoggedIn="";   //when i used empty string it gives false
//1 =>true; 0=>false "Farhan"=>true
let boolaenIsLoggedIn=Boolean(isLoggedIn)
// console.log(boolaenIsLoggedIn);
// console.log(typeof(boolaenIsLoggedIn));

let someNumber=33;
let stringNumber=String(someNumber)
// console.log(typeof(stringNumber));
// console.log(stringNumber);

//**** Operations****

// let value=3;
// let negValue=-value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);  //remainder

let str1="Hello!"
let str2=" Farhan"
// console.log(str1+str2);

// console.log("2"+1);
// console.log(1+"2");
// console.log(1+2+2+"2");      //output is 52

// console.log(true)     //gives true
// console.log(+true);   //gives 1


let gameCounter=100;
gameCounter++;            //increment operator
// console.log(gameCounter);

let gameKiller=110;
--gameKiller;
console.log(gameKiller);