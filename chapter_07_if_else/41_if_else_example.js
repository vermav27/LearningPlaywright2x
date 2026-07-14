if("hello"){
    console.log("Statement is truthy");
}

if(34){
    console.log("34 is truthy.");
}

if({}){
    console.log("Empty Object is truthy");
}

if([]){
    console.log("Empty array is truthy");
}

//Empty string is not truthy
if(""){
    console.log("Is empty string is truthy ?");
}

///null is not truthy
if(null){
    console.log("Is null truthy ?");
}

//Undefined is not truthy
if(undefined){
    console.log("Is undefined truthy ?");
}

//NaN is not truthy
if(NaN){
    console.log("Is Nan truthy ?");
}

//Single if is also allowed
if(true){

    console.log("System will enter into this");

}