// let num = document.getElementsByClassName("num");
// let counting = document.getElementsByClassName("buttonbox");

// let count =0;
//     updateDisplay();
// counting[0].addEventListener("click",()=>{
//     count++;
//         updateDisplay();
// });

// function updateDisplay(){
//     num[0].innerHTML=count;

// };

// let score = 75;
// let grade;

// if(score >=0 && score <=49){
//     grade = "D"
// }
// else if(score >=50 && score <=69){
//     grade = "C"
// }
// else if(score >=70 && score <=89){
//     grade = "B"
// }
// else if(score >=90 && score <=100){
//     grade = "A"
// }
// console.log("your grade are:",grade);

// for(i=0; i<= 5; i++){
//     console.log ("laxmikanth");
// }
//  console.log("loop end");

// let sum = 0;

// for (i=0; i<=5; i++){
//     sum = sum + i;
// }
// console.log ("sum = ",sum);

// let i= 1;
// while (i<=5) {
//     console.log('i=',i);
//     i++;
// };
// let i = 1;
// do{
//     console.log('i=',i);
//      i++;
// }
// while (i<=6)
// for(let num =0; num <=100; num++)
//     {
//     console.log("num=",num)

// };

// for(let num =0; num<=100;num++)
// {
//     if(num%2==0){
//         console.log("num=",num);

//  }
// }

// let gamenum = 20;
// let username=prompt("enter num") ;

// while(gamenum!=username){
//     username=prompt("trie again enter num") ;

// }
// console.log("conglution that the num 😇");

// let str ="laxmikanth";
// console.log(str[1]);

// console.log("the item",obj.item,"price is",obj.price);
// let output =`the item ${obj.item}price is ${obj.price}`;
// console.log (output);

// let output =`the item price is ${1+2+3}`;
//  console.log (output);

// let mark=[96,45,76,86];
// console.log(mark);

// let heroes = ["mother","father","brother","grandfather","grandmother" ]
// for(let i=0; i<heroes.length;i++){
//     console.log(heroes[i]);

// }

// for(let hero of heroes){
//     console.log( "hero:", hero);

// }

// let students=["raja","rama","rajesh","ramash"];
// let mark =[90,70,65,60,55];
// let sum =0;

// for (let i=0; i<mark.length;i++)
// {sum+=mark[i]};

// let avg=sum/mark.length
// console.log(`avg marks of the class=${avg}`);

// let data=[];
// for(let i=0; i<students.length;i++){
//     data.push({name:  students[i],score: mark[i]})
// }
// let sort = data.sort((a,b)=> b.score - a.score);
// console.log("sort",sort);

// console.log("1st:" ,data[0].name,"=", data[0].score);
// console.log("2st:" ,data[1].name, "=", data[1].score);
// console.log("3st:" ,data[2].name,"=", data[2].score);

// let mark =[90,60,40,70,65];
// mark.sort ((a,b)=>b-a);
// console.log(mark)

// let students = [
//   { name: "rama", mark: 90 },

//   { name: "raja", mark: 80 },

//   { name: "ramshaa", mark: 70 },
// ];
// for (let i = 0; i < students.length; i++) {
//   let output = `${students[i].name} = ${students[i].mark}`;
//   console.log(output);
// }

// let resuma = [
//     {
//      name:"rama",
//      age: 21,
//      marks:79,

//      addres:{
//         city:"bhtakal",
//         homeadds:"k.b road bhatkal",
//         code:581320
//      },

//       hobby:["gaming","playing","coding"]

//     },
//         {
//      name:"raja",
//      age: 21,
//      marks:79,

//      addres:{
//         city:"bhtakal",
//         homeadds:"k.b road bhatkal",
//         code:581320
//      },

//       hobby:["gaming","playing","coding"]

//     },
//         {
//      name:"ramasha",
//      age: 21,
//      marks:79,

//      addres:{
//         city:"bhtakal",
//         homeadds:"k.b road bhatkal",
//         code:581320
//      },

//       hobby:["gaming","playing","coding"]

//     },
//         {
//      name:"ragive",
//      age: 21,
//      marks:79,

//      addres:{
//         city:"bhtakal",
//         homeadds:"k.b road bhatkal",
//         code:581320
//      },

//       hobby:["gaming","playing","coding"]

//     }
// ]
// for(let i=0; i<resuma.length; i++){
//     let output = `name= ${resuma[i].name} ,age= ${resuma[i].age} addres= ${JSON.stringify(resuma[i].addres)}, hobby= ${resuma[i].hobby}       `
//     console.log(output)
// }
// fetch("persoin.json")
// .then(response => response.json()  )
// .then(value => console.log(value))

// function username(){
//    console.log("user the name");
//    console.log("the name is:");

// }
//    username ();
// username ();
// my function ();

// ARROW//
// function mul(a,b){
//    return a*b;
// }
// let arrowMul=(a,b)=>{
//    console.log (a * b);
// };

// function add(a,b){
//    return a+b;
// }
// let arrowAdd=(a,b)=>{
//    return a+b;
// }

// //
//    let num = [1,2,3,5,7,9];
//    num.splice (2,0,1,3,54,6,77);

//      let numb = [1,2,3,5,7,9];
//    numb.push(1,3,);

//    let int=[1,2,3,4,5,6,7,8];
//   console.log (int.slice(1,3));

//    let integer=[1,2,3,4,5,6,7,8];
//    let word =["raja", "ramesh" ,"rama" ]
//     let intword=(integer.concat(word));
//   console.log(intword);

//   let number = [1,2,3,5,7,9];
// number.unshift(1,3);

//     let words =["raja", "ramesh" ,"rama" ]
//     let intwords =words.shift();
//   console.log( "Deleted for start:", intwords);

//    let wors =["raja", "ramesh" ,"rama" ]
//     let intwors =words.pop();
//   console.log("deleted for end:",intwors);

// function countvoual(str){
//    let count=0;
//    for(const char of str){
//       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//       {
//          count++;
//       }

//    }
//    // console.log(count);
//    return count;
// }

// const countvol = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
//   // return count;
// };

// let nums=[1,3,4,5];
// nums.forEach((nums)=>{
//    console.log(nums*nums);
   
// })
// let num =[1,3,4,5];
// let calnum = (num)=>{
// console.log(num*num);
//    }
// num.forEach(calnum);


// let numder=[1,2,3,4];
// let newnum=numder.map((val) =>{
//    return val*val;
// });
// console.log(newnum);


// let numder=[1,2,3,4];
// let newnum=numder.filter((val) =>{
//    // return val % 2===0;
//    // return val % 2!==0;
//    return val > 2;
// });
// console.log(newnum);

// let num=[1,2,3,4,6];

// const output=num.reduce((res,curr)=>{
//    return res+curr;

// })
// console.log(output); 
