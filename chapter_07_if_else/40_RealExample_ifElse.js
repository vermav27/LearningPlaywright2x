let isLoggedIn = true;
let userRole = "editor";

if(isLoggedIn){

    if(userRole === "editor"){
        console.log(`You are logged in as ${userRole} - Edit access granted !`);
    }else if(userRole === "admin"){
        console.log(`You are logged in as ${userRole} - You can do anything !`);
    }else if(userRole === "viewer"){
        console.log(`You are logged in as ${userRole} - View Only Mode`);
    }else{
        console.log("Logged in as GUEST.")
    }

}else{

    console.log("You need to login first.")

}