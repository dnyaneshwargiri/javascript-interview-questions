//======================= Chapter 1 Inheritance =================
//create class using function 
function student(name, rollnumber){
this.name=name;
this.rollnumber=rollnumber
}
var std=new student('dny','198');
console.log(std.rollnumber)
//anonymous object
var rose={color:'red'};

//How to declare a private and a public member?
function Student(name,roll){
    var id= 'ABCD123';//private variable
    this.name = name;
    this.roll = roll;
 }
console.log(new Student('dny',198).id)//return undefined
//Q. What is prototype property?


//============================= this vs private variable

function Student(name){
    var _name=name
    this.getName = ()=>{
        return this._name
    }
}
var s=new Student('Dnyaneshwar')
s._name='xyz'
console.log(s.getName())//'xyz'
VM442:9 xyz
undefined
function Student(name){
    var _name=name
    this.getName = ()=>{
        return _name
    }
}
var s=new Student('Dnyaneshwar')
s._name='xyz'
console.log(s.getName())//'Dnyaneshwar'
