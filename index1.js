//what is program?
//PROGRAM IS STEP BY STEP INSTRUCTION GIVEN TO COMPUTER OR ANY MACHINE
//TO PERFORM SPECIFIC TASK.


//HOW TO WRITE A PROGRAM?
//for writing program we had several programming languages like
//c,c++,c#,java,python,javascript ect....

//java script is programming language which is used to build website and backend

//dose java script has basic structure like c,c++ and java?
//NO, JAVA SCRIPT DOES NOT HAVE BASIC STRUCTURE LIKE C,C++ AND JAVA
//BECAUSE IT IS A INTERPRETED LANGUAGE AND IT IS NOT COMPILED LANGUAGE

//HOW TO WRITE A JAVA SCRIPT PROGRAM?
//node index1.js

console.log("hello world");

//integer number =====> 1,2,3,4,5 or -1,-2,-3,-4,-5
//float ====> 1.5,2.5,3.5 or -1.5,-2.5,-3.5
//string ===> "hello","world","javascript"
//boolean ===> true or false

//variable types in java script
//var,let,const

//syntax of variable declaration
//vartype variablename = value;

var a = 10;
console.log(a);
a=15.5;
console.log(a);
a="hello";
console.log(a);
a=true;
console.log(a);

let b=20;
console.log(b);
b=25.5;
console.log(b);
b="world";
console.log(b);
b=false;
console.log(b);

const c=30;
console.log(c);

const d=30.5;
console.log(d);

const e="javascript";
console.log(e);

const f=true;
console.log(f);

//WHAT IS VARIABLE?
//VARIABLE IS A ADDRESS OR CONTAINER WHICH STORES THE VALUE INIT

// WHAT IS VARIABLE SCOPE
//VALIDITY OF THE VARIABLE IS CALLED VARIABLE SCOPE

{
    var x=10;
    console.log(x);
}
console.log(x)

//if(condition){
//code
//}

if(x==10){
    console.log("x is 10");
}

//if(condition){
//code
//}else{
//code
//}

if(x==20){
    console.log("x is 20");
}else{
    console.log("x is not 20");
}

//loops or iterations
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
//for, forof,forin,while,do while

//synrax for for loop
//for(initialization;condition;increment/decrement){
//code
//} a<b a>b a==b a!=b

//increment or decrement
// var i=1;
// console.log(i);
// i--//i=1+1=2
// console.log(i);


for(let i=0; i<5;i++){
    console.log(i);
    //i=0=>0<5->true==>0==>i++=>i=1
    //i=1=>1<5->true==>1==>i++=>i=2
    //i=2=>2<5->true==>2==>i++=>i=3
    //i=3=>3<5->true==>3==>i++=>i=4
    //i=4=>4<5->true==>4==>i++=>i=5
    //i=5=>5<5->false==>loop ends
}

let i=0;
console.log("==========while loop==========");
while(i<5){
    console.log(i);
    i++;
    //i=0=>0<5=>true===>0++==>1==>i=1
    //i=1=>1<5=>true===>1++==>2==>i=2
    //i=2=>2<5=>true===>2++==>3==>i=3
    //i=3=>3<5=>true===>3++==>4==>i=4
    //i=4=>4<5=>true===>4++==>5==>i=5
    //i=5=>5<5=>false==>loop ends

    //while loop checks condition first and than based on condition if it is true loop executes
}
//infinite loop

//do while loop
// first iteration will execute wihtout checking condition but froms seconds iteration it checks the condition
//only if condition satisfies it will be executed....

//do{
//
///
//
//}while(condition)
console.log("===============do while =====================")
i=6
do{
    console.log(i);//6
    i++;//7
}while(i<5)

//what is an array?
//array is a varaible that stores muliple values of different types
//var arr = [1,2,3,4,5,6]

var arr = [1,2,3,4,5,6,7,"geetha","ramu","sujatah","likith",true]
console.log(arr)

arr.push(10)
console.log(arr)

arr.unshift("joshi")
console.log(arr)

arr.shift()
console.log(arr)

arr.pop()
console.log(arr)

for(let arrelemnt of arr){
    console.log(arrelemnt)
}

//object
//object is a set of data seperated in key value pair 
//var onj={
    //key:value
//}

var obj ={
    first_name:"joshi",
    last_name:"sankar",
    age:27,
    is_handicapped:false
}

console.log(obj)

for (let person in obj) {
    console.log(obj[person])
}

//functions