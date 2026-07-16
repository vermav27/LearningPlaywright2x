/*
✅ Pyramid pattern in Java

    *
   ***
  *****
 *******
*********

*/
let n = 5;
for (let i = 1; i < n; i++) {

    let blank = "";
    for (let j = n; j > i; j--) {

        blank = blank + " ";

    }

    let star = "";
    for (let k = 1; k <= 2 * i - 1; k++) {
        star = star + "*";
    }

    console.log(blank + star);


}