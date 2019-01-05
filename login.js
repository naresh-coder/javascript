

let validate =()=>{
    let username  = document.getElementById("username").value;
    let password  = document.getElementById("password").value;


    if(!username || !password){
        document.getElementById("res").innerHTML =" Enter username and password";
    }
    else{
        document.getElementById("res").innerHTML =" Login Successful";

    }

return ;



}
