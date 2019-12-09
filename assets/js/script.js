var checkForm = document.getElementById("checkbox-form");

function checkFunction(){
    
    var count = 0;
    var pwdLength = document.getElementById("pwdLength").value;
    var intPwdLength = parseInt(pwdLength);
    var boolean = true;
            
    for (var i = 0; i < checkForm.elements.length; i++ ) {
        if (checkForm.elements[i].checked == false) {
            count++;
        }
    }
   
    if (count == 4){
        alert("You should select AT LEAST 1 checkbox");
        // document.getElementById("upperCase").focus();
        boolean = false;
    }

    if (isNaN(intPwdLength) || intPwdLength<8 || intPwdLength >128){
        alert("Please enter the length between 8 and 128");
        document.getElementById("pwdLength").value="";
        document.getElementById("pwdLength").focus();
        boolean = false;
    }
    
    if(boolean){
        generatePwd(intPwdLength);
    }
}


function generatePwd(intPwdLength){
    var upperCaseStr= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseStr= "abcdefghijklmnopqrstuvwxyz";
    var numStr= "0123456789";
    var splCharStr= " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    
    var upperPwd="";
    var lowerPwd="";
    var numPwd="";
    var splPwd="";
    var pwdStr="";
    var password="";
        
    if(checkForm.elements[0].checked == true){
        for (i=0; i<intPwdLength; i++){
        
            upperPwd += upperCaseStr.charAt(Math.floor(Math.random()*upperCaseStr.length));
            
        }

        pwdStr += upperPwd;
    }
    
    if(checkForm.elements[1].checked == true){
        for (i=0; i<intPwdLength; i++){
        
            lowerPwd += lowerCaseStr.charAt(Math.floor(Math.random()*lowerCaseStr.length));
            
        }
        pwdStr +=lowerPwd;
    }

    if (checkForm.elements[2].checked == true){
        for (i=0; i<intPwdLength; i++){
        
            splPwd += splCharStr.charAt(Math.floor(Math.random()*splCharStr.length));
            
        }
        pwdStr += splPwd;
    }

    if(checkForm.elements[3].checked == true){
        for (i=0; i<intPwdLength; i++){
        
            numPwd += numStr.charAt(Math.floor(Math.random()*numStr.length));
            
        }
        pwdStr +=numPwd;
    }

    for (i=0; i<intPwdLength; i++){
        password += pwdStr.charAt(Math.floor(Math.random()*pwdStr.length));
    }
       
    document.getElementById("show-password").value = password;
    document.getElementById("copytext").disabled = false;
    document.getElementById("copytext").style.backgroundColor = "darkgreen";

    copytext();
}

function copytoClip(copytext){
    
    window.prompt("Copy to clipboard: Ctrl+C, Enter", copytext);
    
}
