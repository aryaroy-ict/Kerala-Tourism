let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
function signin()
{
    let regexp = /^([A-Za-z0-9\.-_\]+)@([A-Za-z0-9\_]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    let psregexp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,13}$/;
    if(regexp.test(email.value)) 
    {   
        document.getElementById("error").innerHTML = "Valid";
    }
    else {
        document.getElementById("error").innerHTML = "Invalid";

    }
    if(psregexp.test(pwd.value) == false)
    {
    
       alert("Please check your password");
    }
    if(psregexp.test(pwd.value) == true)
    {
        document.getElementById("error1").innerHTML = "Valid Password";
        pwd.style.border = "green";
    }
    
}




