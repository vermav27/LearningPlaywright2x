console.log(greeting);
var greeting = "Hello";
console.log(greeting);

//Behind the scenes :
//var greeting;          <-------hoisted with undefined
//console.log(greeting); <----undefined
//greeting = Hello;      <----value assigned
//console.log(greeting); <----"Hello"

//Hoisting means everything we will put it on the top like a flag. as javascript has a assumption
//that you will be using that variable later in code.