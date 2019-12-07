function checkFunction(){
    var checkForm = document.getElementById("checkbox-form");
    var count = 0;
    var pwdLength = document.getElementById("pwdLength").value;
    
        intPwdLength = parseInt(pwdLength);
    
    for (var i = 0; i < checkForm.elements.length; i++ ) {
        if (checkForm.elements[i].checked == false) {
            count++;
        }
    }
   
    if (count == 4){
        alert("You should select AT LEAST 1 checkbox");
    }

    if (pwdLength == "" || intPwdLength<8 || intPwdLength >128){
        alert("Please enter the length between 8 and 128")
    }
    
    document.getElementById("show-password").value = "!!Work in Progress";
    
}

    
