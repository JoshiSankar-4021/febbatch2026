//output function
// console.log('hello world');
//  difference between html and js
// html is a front end technology js is a backend technology

//variables
//data types 
// integers === 1,2,3,4,5
// strings === 'hello world'
// booleans === true or false
// flaot === 4.6

//variable types
// var, let, const
// var is a global variable
// let is a block scope variable
// const is a constant variable

// const a = 10;
// console.log(a);
// a=20.5;
// console.log(a);
// a='hello this is string';
// console.log(a);
// a=true;
// console.log(a);
// a=false;
// console.log(a);

//var,let ====>const
// var scope of  the varaible differs in both var and let
// scope of a var varibale is global after declaration
// scope of a let variable is block scope after declaration

// if(true){
//     var b = 20;
//     console.log(b);
// }
// console.log(b);

if(false){
    let c=30;
    console.log(c);
}

//operators
//comparison operators
// ==, ===, !=, !==, >, <, >=, <=
//logical operators
var a =10;
// if(a===10){
//     console.log('a is equal to 10');
// }

// if(a==10){
//     console.log('a is equal to 10');
// }

// if(a>10){
//     console.log('a is greater than 10');
// }else{
//     console.log('a is not greater than 10');
// }

// if(a<10){
//     console.log('a is less than 10');
// }else{
//     console.log('a is not less than 10');
// }

// if(a>=10){
//     console.log('a is greater than or equal to 10');
// }

// if(a<=10){
//     console.log('a is less than or equal to 10');
// }

if(a!=10){
    console.log('a is not equal to 10');
}else if(a!==10){
    console.log('a is not equal to 10');
}else if(a==10){
    console.log('a is double equal to 10');
}else if(a===10){
    console.log('a is equal to 10');
}else if(a>10 && a<20){
    console.log('a is greater than 10 and less than 20');
}else{
    console.log('a is not equal to 10');
}


//ITERATIONS
//SOME TIMES WE NEED TO DO SAME JOB MULTIPLE TIMES AT THAT TIME
//  WE WILL USE ITERATIONS
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop

//FOR LOOP
// for(initialization; condition; increment/decrement){
//     //code to be executed
// }
for(let i=0;i<=5;i++){
    console.log(i)
    //0=>0<=5=>true=>0=>i++=>1
    //1=>1<=5=>true=>1=>i++=>2
    //2=>2<=5=>true=>2=>i++=>3
    //3=>3<=5=>true=>3=>i++=>4
    //4=>4<=5=>true=>4=>i++=>5
    //5=>5<=5=>true=>5=>i++=>6
    //6=>6<=5=>false
}

// let i=0;
// console.log(i);
// i++;
// console.log(i);
// ++i;
// console.log(i);
// --i;
// console.log(i);
// i--;
// console.log(i);

//while loop
//while(condition){
    //code to be executed
// }

console.log("===========while loop===========");
let j=0;
//0<=5
while(j<=5){
    console.log(j);
    j++;

    //0>=5=>true=>0=>j++=>1
    //1>=5=>true=>1=>j++=>2
    //2>=5=>true=>2=>j++=>3
    //3>=5=>true=>3=>j++=>4
    //4>=5=>true=>4=>j++=>5
    //5>=5=>true=>5=>j++=>6
    //6>=5=>false
}

//do while loop
// do{
//     //code to be executed
// }while(condition)

console.log("===========do while loop===========");
let k=6;
do{
    console.log(k);
    k++;//7
    //0>=5=>true=>0=>k++=>1
    //1>=5=>true=>1=>k++=>2
    //2>=5=>true=>2=>k++=>3
    //3>=5=>true=>3=>k++=>4
    //4>=5=>true=>4=>k++=>5
    //5>=5=>true=>5=>k++=>6
    //6>=5=>false
    //7>=5>=>false
}while(k<=5)

//array
//array = [1,2,3,4,5]
//array = ['hello','world']
//array = [1.5,2.5,3.5]
//array = [true,false,true,false]

//array = [1,2,3,4,5,'hello','world',1.5,2.5,3.5,true,false,true,false]

//syntax of array
// let arrayName = [element1, element2, element3, ...];
let data =[1,2,3,4,5,6,7,8,9,10,'hello','world',1.5,2.5,3.5,true,false,true,false];
console.log(data);
console.log(data.length);
//accessing array elements using index values
// console.log(data[13])
//  0,1,2,3,4
//accessing array elements using for loop
console.log("=========== asccesing elemts through for loop===========");
for(let index=0;index<data.length;index++){
    console.log(data[index]);
    //index=0==>0<19=>true=>data[0]=>1=>index++=>1
    //index=1==>1<19=>true=>data[1]=>2=>index++=>2
    //index=2==>2<19=>true=>data[2]=>3=>index++=>3
    //index=3==>3<19=>true=>data[3]=>4=>index++=>4
    //index=4==>4<19=>true=>data[4]=>5=>index++=>5
    //index=5==>5<19=>true=>data[5]=>6=>index++=>6
    //index=6==>6<19=>true=>data[6]=>7=>index++=>7
    //index=7==>7<19=>true=>data[7]=>8=>index++=>8
    //index=8==>8<19=>true=>data[8]=>9=>index++
    //index=9==>9<19=>true=>data[9]=>10=>index++
    //index=10==>10<19=>true=>data[10]=>'hello'=>index++
    //index=11==>11<19=>true=>data[11]=>'world'=>index++
    //index=12==>12<19=>true=>data[12]=>1.5=>index++
    //index=13==>13<19=>true=>data[13]=>2.5=>index++
    //index=14==>14<19=>true=>data[14]=>3.5=>index++
    //index=15==>15<19=>true=>data[15]=>true=>index++
    //index=16==>16<19=>true=>data[16]=>false=>index++
    //index=17==>17<19=>true=>data[17]=>true=>index++
    //index=18==>18<19=>true=>data[18]=>false=>index++
    //index=19==>19<19=>false
}

//for of loop
console.log("===========for of loop===========");
for(let value of data)
{
    console.log(value);
    //let data =[1,2,3,4,5,6,7,8,9,10,'hello','world',1.5,2.5,3.5,true,false,true,false];
    //console.log(data[0])
}

//for in loop
console.log("===========for in loop===========");
for(let index in data){
    console.log(data[index]);
    //let data =[1,2,3,4,5,6,7,8,9,10,'hello','world',1.5,2.5,3.5,true,false,true,false];
    //console.log(data[0])
}

//list of marraigeable items
//1.bride
//2.groom
//3.wedding hall
//4.caterer
//5.photographer
//0,      1,       2,             3,          4
// ['bride','groom','wedding hall','caterer','photographer']

let arr=['bride','groom','wedding hall','caterer','photographer'];
console.log(arr);
arr.push('decorator');
console.log(arr);
arr.unshift('invitation cards');
console.log(arr)
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);



//object
// var obj ={key1:value1, key2:value2, key3:value3}

var joshi={name:"joshi", age:30, city:"delhi"};
console.log(joshi);
console.log(joshi.name);
console.log(joshi.age);
console.log(joshi.city);


var people=[{name:"joshi", age:30, city:"delhi"},
{name:"ravi", age:25, city:"mumbai"},
{name:"sita", age:28, city:"kolkata"}]

var people2=[{name:"joshi", age:30, city:"delhi"},{name:"ravi", age:25, city:"mumbai"},{name:"sita", age:28, city:"kolkata"}]


//functions
//methods----->a block of code which performs a specific task and can be reused

function add(){
    console.log('add is called')
}

add();

function add(userid){
 console.log('add is called with userid: '+userid);
}

add(1);

//arrow function
//syntax
// const functionName = (parameters) => {
//     //code to be executed
// }

const add2 = ()=>{
    console.log('add2 is called');
}
add2();
