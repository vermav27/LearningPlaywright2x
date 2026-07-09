console.log(score);
// let score = 100; // let will never allow that

//  we will get ReferenceError: Cannot access 'score' before initialization

/* 
On execution of console.log(score). Program will enter the TDZ - Temporal dead zone. which means that
Program has no reference of the variable till program reaches the variable declaration.  
*/
