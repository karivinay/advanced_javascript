// // named function

// function sum(num1 , num2){
//     var result = num1+num2;
//     return result;
// }
// console.log("named function");
// console.log(sum(5 ,7));

// // anonymous function 

// sum= function(num1,num2){
//     var result = num1+num2;
//     return result;
// }
// console.log("anonymous function ");
// console.log(sum(6,9));

// // IIFE 

// var sum= (function(num1,num2){
//     var result = num1+num2;
//     return result;
// })(4,8);
// console.log("IIFE  ");
// console.log(sum);

// // arrow function 

// product = (num1,num2)=>{
//     var result = num1*num2;
//     return result;
// }
// console.log("arrow function  ");
// console.log(product(5,4));


// // arrow function forms

// add = num1=>num1*num1
// console.log("arrow function forms ");
// console.log(add(5));

// // defult perameter

// function sub(num1, num2){
//     console.log("defult perameter ");
//     console.log(num1,num2,num1*num2)
// }
// sub(4,8)

// // salary increment

// var salaries= [50000,45000,55000,60000]
// console.log("salary increment")
// console.log(salaries)
// salaries.forEach((salary,index)=>{
//     let increment =salary/10
//     salaries[index]=salary+increment
// })
// console.log(salaries)

// // sets in java

// a1 = [60,80,90,70,80,90,70]

// let s1 = "Hyderabad"
// let s2 = new Set(s1)
// s2.forEach(function(ele,index,s){
//     console.log(ele)
//     console.log(index)
//     console.log(s)
// })

// // objects

// let movie ={name:"rrr" ,release:2021 ,director:"rajamouli"}
// console.log(movie["director"])

// // console. 

// let s = "used"
// console.log("log method",s)
// console.info("info method",s)
// console.warn("warn method",s)
// console.error("error method",s)
// console.table(['xyz','abc','pqr'])
// console.table({name:"xyz",age:26,place:"vizag"})

// let x = +prompt("enter a number")
// console.time("loop time:")
// while(x!=10){
//     console.log("enter 10")
//     console.timeLog("loop time:")
//     x = +prompt("enter a  number")
//     console.count("called:")
// }

// find , some & any 

let places = ["Hyderabad","Vizag","Vijayawada","Delhi"]

var place = places.find(function (ele){
    return ele.startsWith("V")

})
console.log(place)