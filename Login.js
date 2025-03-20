
let uppp=()=>{
let inpname=document.querySelector("#name").value;
let inpemail=document.querySelector("#email").value;
let inpnum=document.querySelector("#num").value;
let inppass=document.querySelector("#pass").value;
let inpcpass=document.querySelector("#cpass").value;

let errname=document.querySelector("#errname");
let erremail=document.querySelector("#erremail");
let errnum=document.querySelector("#errnum");
let errpass=document.querySelector("#errpass");
let errcpass=document.querySelector("#errcpass");

if(inpname==""){
    errname.innerHTML="*Please enter your username*";
    document.querySelector("#name").style.backgroundColor="white"; 
    document.querySelector("#name").style.border="2px solid red"; 
    return false;
}

if(inpemail==""){
    erremail.innerHTML="*Please enter your email*";
    document.querySelector("#email").style.backgroundColor="white"; 
    document.querySelector("#email").style.border="2px solid red"; 
    errname.innerHTML="";
    return false;
}
else if(!(inpemail.includes("@") && inpemail.includes(".com"))){
    erremail.innerHTML="*Please enter valid email*";
    document.querySelector("#email").style.backgroundColor="white"; 
    document.querySelector("#email").style.border="2px solid red"; 
    errname.innerHTML="";
    return false;
}
if(inpnum==""){
    errnum.innerHTML="*Please enter mobile number*";
    document.querySelector("#num").style.backgroundColor="white"; 
    document.querySelector("#num").style.border="2px solid red"; 
    errname.innerHTML="";
    erremail.innerHTML="";
    return false;
}
else if(isNaN(inpnum)){
    errnum.innerHTML="*Please enter numbers only*";
    document.querySelector("#num").style.backgroundColor="white"; 
    document.querySelector("#num").style.border="2px solid red";
    errname.innerHTML="";
    erremail.innerHTML="";
    return false;
}
else if(inpnum.length!=10){
    errnum.innerHTML="*Please enter 10 digits*";
    document.querySelector("#num").style.backgroundColor="white"; 
    document.querySelector("#num").style.border="2px solid red";
    errname.innerHTML="";
    erremail.innerHTML="";
    return false;
}
if(inppass==""){
    errpass.innerHTML="*Please enter password*";
    document.querySelector("#pass").style.backgroundColor="white"; 
    document.querySelector("#pass").style.border="2px solid red";
    errname.innerHTML="";
    erremail.innerHTML="";
    errnum.innerHTML="";
    return false;
}
else if(inppass.length<8 || inppass.length>10){
    errpass.innerHTML="*Password length must be between 8 and 10*";
    document.querySelector("#pass").style.backgroundColor="white"; 
    document.querySelector("#pass").style.border="2px solid red";
    errname.innerHTML="";
    erremail.innerHTML="";
    errnum.innerHTML="";
    return false;
}
else if(!(inppass.match(/[0123456789]/) &&
        inppass.match(/[!@#$%^&*()]/) &&
        inppass.match(/[a-z]/) &&
        inppass.match(/[A-Z]/)))
    {
    errpass.innerHTML="*Enter strong password*";
    document.querySelector("#pass").style.backgroundColor="white"; 
    document.querySelector("#pass").style.border="2px solid red";
    errname.innerHTML="";
    erremail.innerHTML="";
    errnum.innerHTML="";
    return false;
}
if(inpcpass==""){
    errcpass.innerHTML="*Please confirm password*";
    document.querySelector("#cpass").style.backgroundColor="white"; 
    document.querySelector("#cpass").style.border="2px solid red";
    errname.innerHTML="";
    erremail.innerHTML="";
    errnum.innerHTML="";
    errpass.innerHTML="";
    return false;
}
else if(inppass!=inpcpass){
    errcpass.innerHTML="*Password must be same*";
    document.querySelector("#cpass").style.backgroundColor="white"; 
    document.querySelector("#cpass").style.border="2px solid red";
    document.querySelector("#cpass").value = ""
    document.querySelector("#cpass").focus()
    document.querySelector("#cpass").style.border="2px solid red";
    errname.innerHTML="";
    erremail.innerHTML="";
    errnum.innerHTML="";
    errpass.innerHTML="";
    return false;
}


localStorage.setItem("Name",inpname);
localStorage.setItem("Email",inpemail);
localStorage.setItem("Number",inpnum);
localStorage.setItem("Password",inppass);
localStorage.setItem("Confirm password",inpcpass);





location.href="Login.html";
return false;

}





let loginn=()=>
{



    let loginname=document.querySelector("#loginname").value;
    let loginpass=document.querySelector("#loginpass").value;

    let loginerrname=document.querySelector("#loginerrname");
    let loginerrpass=document.querySelector("#loginerrpass");

    let cname=localStorage.getItem("Name");
    let cpass=localStorage.getItem("Password");

    if(loginname==""){
        loginerrname.innerHTML="*This field is mandatory*";
        return false;
    }

    if(loginpass==""){
        loginerrpass.innerHTML="*This field is mandatory*";
        loginerrname.innerHTML="";
        return false;
    }

    if(loginname!=""){
        loginerrname.innerHTML="";
    }

    if(loginpass!=""){
        loginerrpass.innerHTML="";
    }

    if(loginname==cname && loginpass==cpass){
        
        
          Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500

          
});



        


    }
    
    else{
        Swal.fire("Incorrect username or password!");
    }
    
    

    return false;
}

let logout=()=>{
    Swal.fire("You are logged out!");
    localStorage.clear();
}



let rentNow=()=>{
    if(localStorage.getItem("Name")){
        location.href="BookingForm.html";
    }
    else{
        alert("Please login first");
    }
}



// let checkLogin=()=>{
//     if(localStorage.getItem("Name")){
//         document.querySelector("#newLogin").style.display="none" ;
//     }
//     else{
//         document.querySelector("#signupbtn").style.display="none" ;
//         document.querySelector("#newLogin").style.display="block" ;
//     }
// }
