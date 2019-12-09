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
   
    var arrPwd = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "abcdefghijklmnopqrstuvwxyz",
                " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
                "0123456789"];

    var pwdStr="";
    var password="";
    var showPwd = true;

        
    for (i=0; i<checkForm.length;i++){
        
        if(checkForm.elements[i].checked == true){
            pwdStr += arrPwd[i];
                
        }
    }

    randomize();

    function randomize(){
    
        for (i=0; i<intPwdLength; i++){
        
            password += pwdStr.charAt(Math.floor(Math.random()*pwdStr.length));

        }
    }

    var contNum = password.match(/\d+/g);
    if (contNum == null && (checkForm.elements[3].checked == true)) {
        showPwd = false;
        password = "";
        randomize();
    }
        
    if(showPwd){   
        document.getElementById("show-password").value = password;

        document.getElementById("copytext").disabled = false;
        document.getElementById("copytext").style.backgroundColor = "darkgreen";

        copytext();
    }    
}

function copytoClip(copytext){
    
    window.prompt("Copy to clipboard: Ctrl+C, Enter", copytext);
    
}
