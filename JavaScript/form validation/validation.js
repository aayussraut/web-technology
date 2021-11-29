function showMessage(message,location,color){
    document.getElementById(location).innerHTML=message;
    document.getElementById(location).style.color=color;
}
function valname(){
    var uname=document.getElementById('uname').value;
    if(uname.length==0){
        showMessage("Name field can't be empty.","errname",'red');
    }
    else if(uname.length<5){
        showMessage("Not ENough CHaracters",'errname','red');
    }
    else if(!uname.match(/^[a-zA-Z]{3,30}\s{1}[a-zA-Z]{3,30}$/))
        showMessage("enter valid name","errname",'red');
    else
        showMessage("Valid Name",'errname','green');
}

function validphone(){
    var phno=document.getElementById('phno').value;
    if(phno==0){
        showMessage("Field can't be empty.","errphone",'red');
    }
    else if(!phno.match(/^[0-9]*$/))
        showMessage("Enter Number only","errphone","red");
    else if(phno.substr(0,2)!=98)
        showMessage("Must start with 98","errphone","blue");
    else if(phno.length!=10)
        showMessage("Phone NUmber should be of exactly 10 digits","errphone","red");
    else
        showMessage("Valid Phone Number","errphone",'green');
}

function validcom(){
    var com=document.getElementById("comment").value;
    var required=40;
    var remaning=required-com.length;

    if(remaning>0){
        showMessage(remaning+" character","errcomment","red");
    }
    else{
        showMessage("valid comment","errcomment","green",);
    }
}

// function validradio(){
//     var rad=document.getElementById("radio").checked;
//     if(rad==true){
//         showMessage("thank you","errradio","green");
//     }
//     else{
//         showMessage("invalid","errradio","red");
//     }
// }

function validcheckbox(){
    var rad=document.getElementById("checkbox").checked;
    if(rad==true){
        showMessage("thank you","errcheckbox","green");
    }
    else{
        showMessage("invalid","errcheckbox","red");
    }
}

function valemail(){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail=document.getElementById('email').value;
    if(mail.length==0){
        showMessage("Email is required",'erremail','red');
    }
    else if(!mail.match(mailformat)){
        showMessage("enter valid email","erremail",'red');
    }
    else{
        showMessage("Valid Email",'erremail','green');
    }
    
}

