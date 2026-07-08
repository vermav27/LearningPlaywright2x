console.log(greeting);
var greeting = "Hello";
console.log(greeting);

//Behind the scenes :
//var greeting;          <-------hoisted with undefined
//console.log(greeting); <----undefined
//greeting = Hello;      <----value assigned
//console.log(greeting); <----"Hello" 