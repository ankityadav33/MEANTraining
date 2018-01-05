/*var x = '20';
var y = 20;
var z = 10;
console.log("x+z="+x+z);
console.log(x-z);
if(x==y){
	console.log("Equals")
}else{
	console.log("NO Equals")
}*/

/*
var sum=function add(num1, num2){
	return num1+num2;
}

consle.log(addition(5,7));*/

/*setTimeout(function(){console.log("2 seconds left")}, 2000);
(function(){
	console.log("IIFE Called!!");
})();*/

/*

function mystery(){
	function chooseNumber(){
		return 12;
	}
	return chooseNumber; //returns a function
	var chooseNumber=function(){
		return 7;
	}
}

var nesterFunc=mystery(); //we are assigning the function into another variable
console.log(nesterFunc());*/


/*function demo(){
	for(var item of aguments){
		console.log(item);
	}
}

demo("song");
demo("song", "lyrics");
demo("song", "lyrics", "artist");*/


/*var obj={
	firstName:"Foo",
	lastName: "Bar",
	sayHi:function(){
		console.log(this);
		function nestFunc(){
			//console.log(this);
			return "Hello "+this.firstName+" "+ this.lastName;	
		}		
		return nestFunc();
	}
}
console.log(obj.sayHi());*/


/*function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;	
	this.sayHello=function() {
		return "Hello"+this.firstName+" "+this.lastName;
	}
}

Person.prototype.greet = function(){
	return "Hello world  "+ this.firstName+"!!";
}
console.log(foo.greet());



var foo=new Person("foo", "Bar");
console.log(foo.sayHello());

var str = "Some String";
console.log(str.length);
*/

/* 
String.prototype.countAll = function(letter){
	var counter=0;
	for(var i=0;i<this.length;i++){
		if(this.charAt(i).toUpperCase()==letter.toUpperCase()){
			counter++;
		}
	}
	return counter;
}

var str = "Some String";
var str1 = "Gello World";
var str2 = "Welcome to Javascript";
console.log(str.countAll('s'));
console.log(str1.countAll('l'));
console.log(str2.countAll('e')); */
/* 
var Shoe = {
	size:6,
	gender:'Women',
	construction : 'Slipper'
}

var magicShoe = Object.create(Shoe);
magicShoe.size=8;
console.log("Size : "+magicShoe.size);
console.log(Shoe.isPrototypeOf(magicShoe));//true
console.log(magicShoe.isPrototypeOf(Shoe));//false */


/* function testClosure(){
	var x=4;
	return function(){
		//here it is a closure as this is able to access and modify the 
		//value of the external variable x.
		return ++x;		
	}
}
console.log(testClosure()()); //to call the internal anonymous function add ()
 */
/* 
function buildTicket(transport){
	var numOfPass=0;
	return function(name){
		numOfPass++;
		return "Hi "+ name +"\n You are going via "+ transport+"\n Your ticket ID #"+ numOfPass;
	}
}

var ship = buildTicket("Ship");
console.log(ship('Foo'));//to call the internal anonymous function add () with the value
console.log(ship('Bar'));// you will get passenger ID 2 as its the same object
console.log(buildTicket("Train")('Foo')); //you will get passenger ID 1 as its the different object
console.log(buildTicket("Train")('Bar')); //you will get passenger ID 1 as a new object is created everytime */


var logger = require('./logger');
logger.foo();