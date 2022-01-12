let fruits=["apple","mango","orange"];
//Arrays.isArray to find if it is an array
console.log(Array.isArray(fruits));
for(let items in fruits){
    console.log(fruits[items]);
}
//Push and Pop is array******* ps push and pop >faster> shift and unshift
fruits.push('grapes');      //add element to the last node in fruits
fruits.pop();               //removes the laste element
console.log(fruits);

//shift and unshift => To Add/Remove elemets in the 0th Node
fruits.unshift("rasberry");     //adds element
fruits.shift(fruits);           //removes element
console.log(fruits);

//primitive vs referenced => primitive values are unique as they are immutable
//refernce type uses heap so they point to the same element

//to clown an array
let array1=["item1","item2"];
let array2=[...array1] 
// or 
array2=array1.slice(0) 
console.log(array2)
//clone and add new element
array3=[...array1,"item3","itms4"];  //hard way =array1.slice(0).concat(["item3","iten4"]);
console.log(array3)
//add two array
let array4=[...array1,...array3];
console.log(array4,array4.length) //array.length <=will also return length of array 

//to loop in array usign=> ******************** of  ************************
for(let items of fruits){
    console.log(items);}

//to add fruits item to fruits1 same like cloning   PUSH command on array
let fruits1=[];
for(let i=0;i<fruits.length;i++){
   fruits1.push(fruits[i]);  
}
console.log("after pusing item to new array",(fruits1))

//Array Destructure=> to make new variable by taking an element from array
const myArray=['val1',"cal2","val3","val4","val5"];
//...items3 here will tak all the rest value as array
[items1,items2,...items3]=myArray;
console.log(items1,items2,items3,"________________")


//*****************IMPORTANT ARRAY METHODs Opeartion**********************
// forEach, map, filter, reduce, sort, fing , every, same, fill, splice 

//forEach  => calling function inside loop
let num=[23,54,65,23,54];

// const addition=(num,index)=>{
//     console.log("index:",index,"number is",num,"and its 2x is ",num*2);
//     // for(let i=0;i<num.length;i++){
//     //     addition(num[i],i)
//     // }
// }
// addition(num)

//___forEach___ (Shortcut) passes the number and index automatically
//it does the same work of for loop above
// num.forEach(addition);

//Extra Short
num.forEach(function(num,index){
    console.log("index:",index,"number is",num,"and its 2x is ",num*2);
})

//MAP method=> it returns a whole array when we return from it

const number=[2,3,5,2,5,9];
const sqr= function(num){
    return num*num;
}
const squarednum=number.map(sqr);
console.log(squarednum);

//Directly using map
const users=[
    {
        fname:"viksa",
        age: 34,
        gender: "male"
    },{
        fname:"rahul",
        age: 30,
        gender: "female"
    },{
        fname:"sisha",
        age: 12,
        gender: "male"
    }];

const username =users.map((user)=>{
    return user.fname;     //why i cant return two things like also user.age
});
console.log(username)

//     Filter method          returns the new array of given condition

let Number = [34,2,5,6,4,11,57,56,43];
const even=Number.filter((num)=>{
    return num%2===0;
})
console.log(even,"even number using filter method");

//     Reduce method          returns value when its true

Number = [1,2,3,4,5];
// accumulator      current value       returns
//     1                   2                3
//     3                   3                6
//     6                   4                10
//     10                  5                15
const sum=Number.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
},0);                   // 0 here is initial value (optional)
console.log(sum)

const shop=[
    {productId:1,price:12000,name:"tv"},
    {productId:2,price:10000,name:"mobo"},
    {productId:3,price:25000,name:"fridge"}];
const fullprice=shop.reduce((totalprice,currentprice)=>{
    return totalprice +currentprice.price;
},0);
console.log(fullprice);

//      Sort method         //it will change the current array

//will work fine on string=> capital letters will go first
//here sort is converting value in the form of string eg 34=> "34" 
//then ascii value of 3
Number = [34,2,5,6,4,11,57,56,43];
Number.sort((a,b)=>{                    //changing the same array
    return a-b;                         //b-a is Descending order
});
console.log(Number,"______________");

//      Find method         //will return first true element   

fruits= ["number","arrow","banana","roots","map","ai"];
const string= fruits.find((args)=>{return args.length ===6;})
console.log(string);

//      Every method        //return true if all elements are true

Number = [34,2,5,6,4,11,57,56,43];
const evenNo=Number.every((num)=>{return num%2===0;})
console.log(evenNo);

//      Some method         //return true if atleast one element is true

Number = [34,2,5,6,4,11,57,56,43];
const oddNo=Number.some((num)=>{return num%2===0;})
console.log(oddNo);

//      Fill method         //fill the array with the given element

Number = [34,2,5,6,4,11,57,56,43];
console.log(Number.fill(-1));
Number.fill(69,2,5);        //add 69 from 2 to 5 index
console.log(Number);

//      Splice method       //will return the deleted item

//     (starting index, no. of items to delete, no. of items to insert)
let names=["vikash","rahul","anuj","mohit","orange","white","yellow"];
console.log(names);
let deletedItems=names.splice(1,3);       //(starting index,no. of items to delete)
console.log("with .splice(1,3)",deletedItems);

//with all three arguments
names=["vikash","rahul","anuj","mohit","orange","white","yellow"];
deletedItems=names.splice(3,3,"lol","rofl","xD");
console.log("after inserting (3,3)",names,deletedItems,"deleted Items");
