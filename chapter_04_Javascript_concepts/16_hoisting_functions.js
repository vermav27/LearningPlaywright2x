function getUserStatus() {
    //var status_code;           <------Hoisted at the top of function
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);

}

getUserStatus();

//Note : var is funtion-scoped, so status is hoisted to the top of the
//getUserStatus(), Not the global scope