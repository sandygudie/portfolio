

function openNav(){
    document.getElementById("mySidenav").style.width = "200px";
}
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}



function onvalidate(){
    let inputemail= document.getElementsByClassName("input_email")
    let textarea= document.getElementsByClassName("textarea")

    if (inputemail.value == ""){
       alert('the field email cannot be empty');
       inputemail.focus();
       inputemail.style.border="2px solid red";
       return false;
    }
    
    // if (textarea.value == " "){
    //     alert('the field email cannot be empty')
    //     email.focus()
    //     textarea.style.border="2px solid red "
    // return true
    //  }
    // return false
}

// if (inputbox.value = " "){
//      alert('the field email cannot be empty')
//     }
//     else{
//         novalidate()
//     }