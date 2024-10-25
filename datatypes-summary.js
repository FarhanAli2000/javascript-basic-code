//Javascript is a dynamically typed language which means variables can hold values of different types during runtime.

//--------- Primitive       Call by value

//String,Number,Boolaen,undefined,null,bigint,Symbol

const score=100                       //Number
const scoreValue=100.3                //Number
const isLoggedIn=true                 //Boolaen
const outsideTemp=null                //null means khalli  typeof always Object
const myNum=5642784248942984343453445n;         //Bigint   typeof always undefined
const name="Farhan"                   //String
let  userEmail;                       //undefined

const id= Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId);
// console.log(typeof(id));
// console.log(typeof(anotherId));

//----------Non-primitive    Call by reference

//object,array,function

//Array
//This is an array in which we put all types of data.
const studentNames=["Farhan","true",1, ,2.5,null,undefined]
// console.log(studentNames);


//Object
let person={
    name:"Farhan",
    age:"24",
    byprofession:"Software Engineer"
}
// console.log(person.name,person.byprofession,person.age);

//Function
function Myname(){
    console.log("My name is Farhan");
}
Myname();

console.log(typeof(studentNames));      //array typeof always Object
console.log(typeof(person));            //Object typeof always Object
console.log(typeof(Myname));            // function typeof always function

