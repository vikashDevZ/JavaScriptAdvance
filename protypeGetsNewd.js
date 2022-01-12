//                  new keyword        does three work 
//create new empty object
//return empty object
//set the prototype value which we use to do manually i.e
//let userInfo=Object.create(fullDescription.prototype);     line 98 proto.js
//automatically. eg.

function createUser(fname,lname){
    this.fname=fname;
    this.lname=lname;
}

createUser.prototype.about=function(){
    console.log(this.fname,this.lname);
}
const user1 = new createUser("harshit","thakur");       //new sets proto value to prototype
user1.about()


//will now make this code more efficient 4th time using =>  *** new and this keyword ***

//constructor function => as it is constructing object for us
//if we are making fuction that will call by using new keyword and start name of fucntion with UPPERCASE
function FullDescription(fname,lastname,email,age,address){
    this.fname=fname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;
    return this;        //not needed return this as new return automatically
}

FullDescription.prototype.about=function(){
    return `Name is ${this.fname} ${this.lastname}, age is ${this.age}, email: ${this.email}, address ${this.address} `
}
FullDescription.prototype.is18=function(){return this.age >=18};
FullDescription.prototype.sing=function(){return `${this.fname} likes dancing playing songs`};

const myself= new FullDescription("vikash","lololo","pcivs@gamil.com",34,"mahrashtra");
console.log(myself.__proto__);      //new keyword sets __proto__ of user to prototype of function
console.log(myself.about());

//*****************************     hasOwnProperty    USES     *********************************
for(let key in myself){
    console.log(key);               //will also print key from its __proto__ 
}
console.log("_______________________________________________________")

//therefore 
for(let key in myself){
    if(myself.hasOwnProperty(key)){         //will only print the keys that the element has
    console.log(key);         
    }      
}

//prototype
let number = [3,4,1];       //here java is using constructor function to create array as it has its methods in its protype
//Eg. number = new Array(3,4,5);                    //prototype of array is in array form
console.log(Object.getPrototypeOf(number));         //methods
console.log(number.sort());