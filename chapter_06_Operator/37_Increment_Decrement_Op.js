//Pre increment ++a

let a = 10;
let b = ++a; //( Increment the a by 1 )
//++a means First increase the value by 1 then assign the value
  console.log(a);
  console.log(b);

 
/*
++a 
x = ++a ( a = a + 1 )
So here First value of a is incremented to 11 
and the it has been assigned to x
means now : 
x = 11
a = 11

a++
x = a++ ( a = a + 1 )
So here First value is assigned to x means x = 10 
and then it has be incremented to 11
means now 
x = 10
a = 11
*/

let c = 10;
let d = c++; //( Assign the value to d )
//c++ means First aassign the value and then increase value
  console.log(c);
  console.log(d);

let m = 5;
console.log(m++ + ++m - --m + m-- + ++m);
