//Iterables are those which has array like property 
//for of loop    //objects are non iterable

const number= new Set();       //OR
let num= new Set([1,2,4,5,6,7,8,9,34,65]);
console.log(num);

//.add() to add       .has() to find element        
number.add(1);
number.add(2);
number.add(4);
console.log(number,number.has(23)); 

//to remove duplicate items from array //convert it into SET

let duplicate=[34,23,54,6,4,6,6,1,33,34];
const Duplicates=new Set(duplicate);
console.log(Duplicates);

//to find the length of set
let length=0;
for(let item of num){
    length++;
}
console.log(length)

//**********************   MAP DATA STRUCTURE   ************************/
//unlike objects where keys are in the form of strings MAPs can take keys in any format 
const person=new Map();
person.set('fname','vikash');       //.set method to add  new value
person.set('age',34);
person.set(1,'male');       // number can also be used as key

console.log("the age of the person is ",person.get("age"));     //.get() method
console.log(person.keys());        //.keys() return keys

for(let key of person.keys()){         //person.keys (here keys is important)
    console.log(key);
}
//in better format
for(let [key,value] of person){        //[] as we are destructuring from array
    console.log(key,value);
}

//using adding values in object using MAP 
const person1 = {
    id: 1,
    fname:"vikash"
}
const person2 ={
    id:2,
    fname:"harshit"
}

const extraInfo= new Map();
//here person1 object key is assigned to value {age:56, gender: "male"} object
extraInfo.set(person1,{age:56, gender: "male"});
extraInfo.set(person2,{age:16, gender: "female"});
//.get for map and .age to get the value from that object
console.log(extraInfo.get(person1).age);

//MAP can also be make in array form
const arr= new Map([['fname','Vikash'],['age',7]]);
console.log(arr);       //return in form of array

//      Clone using Object assign
const obj={name:"vikash", age:34, gender:"male"}
const obj1={...obj};                    //1st method (new method)
console.log(obj1)                       
const obj2=Object.assign({},obj);       //.assign method (old method)
console.log(obj2)

//      Optional chaining
user={
    fname:"vikash",
    age:6,
    gender:"male",
    address:{localname:"laxhman nagar",area:"malad"}
}
//to get access to object inside object  ?.    
//  ?.  will return undefined when the addess or localname is not available
//can cause error when the object is not found therefore ?. is needed
console.log(user?.address?.localname);  

//      METHODs
//  methods means function inside object
const persoN={
    fname:"vikash",
    age:12,
    about:function(){
        console.log("the person name is ", this.fname,"and person age is ",this.age)
    }
}
persoN.about();         //objectname<function>() to call

//THIS KEYWORD IN DETAILS
function personInfo(){
    console.log(`person name is ${this.fname} and person age is ${this.age}`);
}
const user1={
    fname:"rakesh",
    age:"32",
    gender:"male",
    about: personInfo       //about is assigned to a function
}
const user2={
    fname:"prkesh",
    age:"24",
    gender:"female",
    about: personInfo
}
const user3={
    fname:"ramesh",
    age:"43",
    gender:"male",
    about: personInfo
}
user1.about();      //calling user.about


//  CALL      APPPLY      BIND
const mohan={
    fname:"mohan",
    age:62,
    about:function(music,dance){
console.log("maybe name is ", this.fname,"and person age is ",this.age,"favourite music and dance",music,dance)
    }
}
const mohanFriend={
    fname:"vivek",
    age:"23"
}

function about(music,dance){
    console.log("XYZ name is ", this.fname,"and person age is ",this.age,"favourite music and dance",music,dance)
        }
//calling function from mohan in mohan friend

mohan.about.call(mohanFriend,"nevada","shuffle");      //.call(to call the object in here) <this ka use hora iske andr>
//call() will return undefined      if no object is passed

//if the fuction is written seperately then just use call method with the required object
//about.call(user1,"guitar","shuffle")

//      APPLY           -apply internaly uses call method
mohan.about.call(mohanFriend,["nevada","shuffle"],"ahahhahaah");        //[list] will go in same parameter

console.log("_______________________________________________________________");

//      BIND            returns the function
const func= about.bind(mohanFriend,["nevada","shuffle"]);
func();

//      Small WARNING!!!
const users={
    fname:"Rakesh",
    age:"69",
    gender:"male",
    about(){        //about() == about: function() OK REMEBER ITS CALLED METHOD
        console.log("here name is ", this.fname,"and person age is ",this.age)
    }
}

let myfunc=users.about;           //trows undefined

myfunc=users.about.bind(users);
myfunc();

// ARROW function take this from one level above i.e window

//cannot cahnge the value of .this in arrow function
//Eg
const users1={
    fname:"lololol",
    age:"12",
    gender:"male",
    about:()=>{
        console.log("the person name is ", this.fname,"and person age is ",this.age)
    }
}
users1.about(users1);       //This will return undefined

//.this here is window 
console.dir(this);           //undefind when "use strict"