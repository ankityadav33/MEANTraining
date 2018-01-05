(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
console.log(str2.countAll('e'));
},{}]},{},[1]);





var x = '20';
var y = 20;
var z = 10;
console.log(x+z);//2010
console.log(x-z);//10
if(x==y){
	console.log("Equals")
}else{
	console.log("NO Equals")
}