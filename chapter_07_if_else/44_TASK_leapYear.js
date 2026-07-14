 
/*
condition for leap year :
1. It is divisible by 400, OR
2. It is divisible by 4 but not divisible by 100
*/

// Example : 2024 - Leap Year
// Example : 2025 - Non Leap Year

let year = 1900;

if(year%400 === 0){
    console.log(`${year} is leap year`)
}else if(year%4 === 0 && year%100 !== 0){
    console.log(`${year} is leap year`)
}else{
    console.log(`${year} in not leap year`);
}

