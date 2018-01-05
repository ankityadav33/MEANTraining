"use strict";
/*
ES 6 Feature:
    - Arrow Functions: to create nethods in a simplar form
    - Destructuring
    - Template String Syntax
    - Classes
    - ES6 Module System(instead of Common module system)
    - Rest ad Spread Operator
    - Decorators (ES 7)
    - Block scope variables
*/
exports.__esModule = true;
//Arrow Function
//var numbers=[2,3,4,5,6];
/* var newArray = numbers.map(function(value, index, array){
    return value*2;
});

var newArray=numbers.map((value, index, array)=>value*2);
console.log(newArray);*/
//Destructuring: Arrays
//==========================
/* var arr=["foo", "bar", "bam", "baz"];
var[arr1, arr2, arr3, arr4]=arr;
console.log(arr3);
var[arr1, , arr3, arr4]=arr;
console.log(arr3);
var[arr1, arr3, arr4]=arr;
console.log(arr3);
 */
//Destructuring: Objects
//==========================
/* var myModule={
    drawText:(text)=>console.log("Drawing "+text),
    drawCircle: (r)=>console.log(Math.PI*r*r),
    drawRect: (w, l)=>console.log(2*w*l)
};

var {drawText, drawCircle, drawRect}=myModule;//variables must have same name as in the object property
drawText("SomeText"); */
//Template String Syntax
//==========================
/* var firstName="Foo";
console.log(`Hello

${firstName}`)
 */
//Block scope variables
//==========================
/* function demo(arr){
    if(arr.length>2){
        let load="Loading...";
    }else{
        let flash="Flashing....";
    }
    console.log(flash);
}
demo(["Foo", "Bar", "Bam"]) */
//Rest & Spread operator
//==========================
/* function display(song, ...params){//rest
for(let item of params){
    console.log(item);
}
} */
//display("song");
//display("song", "lyrics");
//display("song", "lyrics", "writer");
/* var arr=[3,4,5];
var newArr=[1,2,...arr];//spread
console.log(newArr); */
var student_1 = require("./student");
var foo = new student_1.Student("Foo", "Bar");
console.log(foo.sayHi());
