//classes in js are fake   as they do the same work of proto internally

//CLASS CONSTRUCTOR CANNOT BE CALLED WITHOUT NEW

class FullDescription{
    constructor(fname,lastname,email,age,address){
        console.log("constructor called")
        this.fname=fname;
        this.lastname=lastname;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    //methods that we add in prototype
    about(){
        return `Name is ${this.fname} ${this.lastname}, age is ${this.age}, email: ${this.email}, address ${this.address} `
    }
    is18(){
        return this.age >=18
    }
    sing(){
        return `${this.fname} likes dancing playing songs`
    }
}

//actually what happens internally 
// function FullDescription(fname,lastname,email,age,address){
//     this.fname=fname;
//     this.lastname=lastname;
//     this.email=email;
//     this.age=age;
//     this.address=address;
//     return this;        //not needed return this as new return automatically
// }

// FullDescription.prototype.about=function(){
//     return `Name is ${this.fname} ${this.lastname}, age is ${this.age}, email: ${this.email}, address ${this.address} `
// }
// FullDescription.prototype.is18=function(){return this.age >=18};
// FullDescription.prototype.sing=function(){return `${this.fname} likes dancing playing songs`};

const myself= new FullDescription("vikash","lololo","pcivs@gamil.com",34,"mahrashtra");
console.log(myself.__proto__);      //new keyword sets __proto__ of user to prototype of function
console.log(Object.getPrototypeOf(myself)); //to see the prototype =>same as above
console.log(myself.about());


//practical of creating calls for vehicle that can move and break

class vehicle{
    constructor(name,speed){     //constructor return automatically
        this.name=name;
        this.speed=speed;
    }
    move(){
       return `${this.name} is in motion`;
    }
    horsePower(){                              //method name should not be same as value name
        return this.speed >=80;
    }
}

const ferrari = new vehicle("ferrari",10);
console.log(ferrari.move());
console.log(ferrari.horsePower());


class truck extends vehicle{
    constructor(name,age,torc){
        super(name,age);                            //name and age will added by super class usign super method
        this.torc=torc;
    }
    run(){
        return `${this.name} has a torque of ${this.torc}`;
    }
    horsePower(){                            
        return `parent class method will execute if it was not preset in this class${this.speed >=80}`;
    }
}
const mahindra=new truck("lowland",39,57);
console.log(mahindra.horsePower());
console.log(mahindra.run());

//                          GETTERS AND SETTER

class person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    get fullname(){                      //<<LOLTAG>>   to call function without () use get 
        return `Name is :${this.fname} and Laste name ${this.lastname} and Age is ${this.age}`; 
    }
    setName(fname,lname){              //use this method to change the name of user<<LOLTAG1>>
        this.fname=fname;
        this.lname=lname;
    }
    set fullname(name){
        const [fname,lname]=name.split(" ")
        this.fname=fname;
        this.lname=lname;
    }
}
const user1= new person("BHAGIDAR","thalut",34);
// console.log(user1.fullname());

console.log(user1.fname);   
//here we can call property with . without using() which we use for calling fucntion
//so in order to call function without () use get mehtod   <<LOLTAG>>
//now we can call the person without using the () method
console.log(user1.fullname);
// user1.setName("vikas","patel");             //chaning the name using setNamefunciton()
// console.log(user1.lname);                    <<LOLTAG1>>

//now to use the same setName fucntion to change the full name directly bu changing function fullname()
user1.fullname="vikash patel";
console.log(user1);

//Staitic method
//it is directly related to class and cannot be called by object

class YoYo{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    fullname(){
        return `${this.fname} and ${this.lname}`;
    }
    static goro(){      //static method
        console.log(" this method can be only access using class")
    }
}

let anime=new YoYo("saitama","onePunch");
console.log(anime.fullname());

//to call static method from class
YoYo.goro();