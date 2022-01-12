// __proto__ or [[prototype]] =>   to chain object by setting their proto as next object

// const obj2=Object.create(onj1);

// CALLING METHOS FROM ONE OBJECT TO ANOTHER
//****************    METHOS CHAINNING    ********************/

const OBJ1={
    key1 : "value1",
    key2 : "value2"
}
// there is one more way to create empty object
//will use that methos to create object chaning

//here we setting proto of OBJ2 to as OBJ1
const OBJ2=Object.create(OBJ1);

OBJ2.key4="value4";
console.log(OBJ2.key1);

//checking the proto of object
console.log(OBJ2.__proto__);        

//now we will easily solve the laste problem that was in objects.js
const useMethods = {
    about : function(){
    return `Name is ${this.fname,this.lastname}, age is ${this.age}, email ${this.email}, address ${this.address} `},
    is18 :function(){
    return this.age >=18;
    },
    hobbies :function(){            //here we have hobbies only in fuction but we can call it by using proto method
        return `${this.fname} likes dancing playing songs`;
    }
}

function fullDesc(fname,lastname,email,age,address){
    let userInfo=Object.create(useMethods);     //setting proto as useMethods object
    userInfo.fname=fname;
    userInfo.lastname=lastname;
    userInfo.email=email;
    userInfo.age=age;
    userInfo.address=address;
    userInfo.about = useMethods.about;
    userInfo.is18 = useMethods.is18;
    return userInfo; 
}

const myname=fullDesc("MAHABHARATA","malva","free@gmail.com",54,"mumbai");
const myname1=fullDesc("RANAPRATAP","gsgda","yahil.com",14,"bambai");
const myname2=fullDesc("VIVEK","gaikda","mahiler@gh.com",32,"banaras");

console.log(myname);
console.log(myname.about());
console.log(myname.is18());

console.log(myname1.hobbies()); // of myname1

//IN JAVASCRIPTS FUCTION ARE ALSO OBJECTS
//eg.
console.log(fullDesc.name); //.name is used to find the name of object

// __proto__           vs             protoype
//prototype are the free space that are given by the function

function hello(){
    console.log(hello)
};
//          ONLY FUNCTION PROVIDE PROTOTYPR PROPERTY
console.log(hello.prototype);   //will provide constructor

//adding value in protoype
hello.prototype.abc='abc';
console.log(hello.prototype); 

//adding function in protoype
hello.prototype.sing=function(){
    console.log('lalalalalalalala');
};
hello.prototype.sing();



//**WE WILL USE AGAIN THE LAST PROBLEM OF objects.js and simplified it even more using function protoype*/


// const Methods = {
//     about : function(){
//     return `Name is ${this.fname,this.lastname}, age is ${this.age}, email ${this.email}, address ${this.address} `},
//     is18 :function(){
//     return this.age >=18;
//     },
//     hobbies :function(){            //here we have hobbies only in fuction but we can call it by using proto method
//         return `${this.fname} likes dancing playing songs`;
//     }
// }

function fullDescription(fname,lastname,email,age,address){
    //here in bracket the proto is sending object to prototype when the item is not found
    let userInfo=Object.create(fullDescription.prototype);   //protoype object id here 
    userInfo.fname=fname;
    userInfo.lastname=lastname;
    userInfo.email=email;
    userInfo.age=age;
    userInfo.address=address;
    return userInfo; 
}

fullDescription.prototype.about=function(){
    return `Name is ${this.fname} ${this.lastname}, age is ${this.age}, email ${this.email}, address ${this.address} `
}
fullDescription.prototype.is18=function(){return this.age >=18};
fullDescription.prototype.sing=function(){return `${this.fname} likes dancing playing songs`};

const myself=fullDescription("vikash","lololo","pcivs@gamil.com",34,"mahrashtra");
console.log(myself);
console.log(myself.about());

