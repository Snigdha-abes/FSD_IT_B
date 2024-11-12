const reg=document.getElementById("register");
reg.addEventListener("submit",(e)=>{
    // e.preventDefault();
    // validate();
    console.log("form submitted");
})
function validate(){
    const mono=document.getElementById('mobile');
    if(isNaN(mono.value) || mono.value.length!=10){
        alert("mobile number is invalid");
        
    }
    reg.submit();

}
//old=> only one functionality on a single event
//new=> multiple functionalities on a single event
