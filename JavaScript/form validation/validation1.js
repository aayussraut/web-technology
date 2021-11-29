function showMessage(message,location,color){
    document.getElementById(location).innerHTML=message;
    document.getElementById(location).style.color=color;
}

function valpsw(){
    // var pswformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,}*$/;
    var psw=document.getElementById('psw').value;
    var uppercase=/[A-Z]/g;
    var lowercase=/[a-z]/g;
    var number=/[0-9]/g;
    // if(!psw.match(pswformat)){
    //     showMessage("Invalid Password",'errpsw','red');
    // }
    // else{
    //     showMessage("Valid Password",'errpsw','green');
    // }
    if(!psw.match(uppercase)){
        showMessage("A <b>capital (uppercase)","capital",'red');
    }
    else{
        showMessage("A <b>capital (uppercase)","capital",'green');
    }
    if(!psw.match(number)){
        showMessage("A <b>number</b>","number",'red');
    }
    else{
        showMessage("A <b>number</b>","number",'green');
    }
    if(!psw.match(lowercase)){
        showMessage("A <b>lowercase</b> letter","letter",'red');
    }
    else{
        showMessage("A <b>lowercase</b> letter","letter",'green');
    }
    if(psw.length<8){
        showMessage("Minimum <b>8 characters</b>","length",'red');
    }
    else{
        showMessage("Minimum <b>8 characters</b>","length",'green');
    }
    
}


