//assigning the checkbox form DOM object to a variable
var checkForm = document.getElementById("checkbox-form");

// Function for validating the user inputs
function validateInputs(){
    
    var intCountCheckbox = 0;
    var pwdLength = document.getElementById("pwdLength").value;
    var intPwdLength = parseInt(pwdLength);
    var bValidation = true; //set to true in the assumption that all user inputs are valid

    //getting the number(intCountCheckbox) of checkboxes which are not checked
    for (var i = 0; i < checkForm.elements.length; i++ ) {
        if (checkForm.elements[i].checked == false) {
            intCountCheckbox++;
        }
    }
    
    //if the count(intCountCheckbox) is 4, alert the user and set the boolean (bValidation) to false a
    if (intCountCheckbox == 4){
        alert("You should select AT LEAST 1 checkbox");
        bValidation = false;
    }

    //checking whether the length entered is a number or the password length is between 8 and 128. If not, alert
    // the user and bring the focus to the text boxes clearing the entered text and setting boolean(bValidation)
    // to false.
    if(!/^\d+(\.\d+)?/.exec(pwdLength) || isNaN(pwdLength) || intPwdLength<8 || intPwdLength >128){
        alert("Please enter a length between 8 and 128");
        document.getElementById("pwdLength").value="";
        document.getElementById("pwdLength").focus();
        bValidation = false;
    }
    
    //only if boolean(bValidation) is true, call the generatePwd() function
    if(bValidation){ 
        generatePwd(intPwdLength);
    }
}


// Function to generte the password and print it on the textarea provided.
function generatePwd(intPwdLength){
   
    var arrPwd = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "abcdefghijklmnopqrstuvwxyz",
                " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
                "0123456789"];

    var pwdStr="";
    var password="";
    var bShowPwd = true;//setting the boolean(bShowPwd) to true

    // looping through the Checkboxes and if checked, passing the corresponding array elements to the password string(pwdStr)  
    for (i=0; i<checkForm.length;i++){
        if(checkForm.elements[i].checked == true){
            pwdStr += arrPwd[i];
        }
    }

    //while the boolean(bShowPwd) is false repeat the randomizing of the str(pwdStr)
    do{
        randomize();
    }while(!bShowPwd);

    // Using Math.random() to randomize the pwdStr 
    function randomize(){

        bShowPwd = true;

        for (i=0; i<intPwdLength; i++){
            password += pwdStr.charAt(Math.floor(Math.random()*pwdStr.length));
        }
        
        // Since the probability of the inclusion of a number is less when more than 2 options are selected,
        // checking the presence of a number in the generated "password" and if not any, repeating the randomization
        var containsNum = password.match(/\d+/g);

        if (containsNum == null && (checkForm.elements[3].checked == true)) {
            bShowPwd = false; //if no numbers, set the bShowPwd to false
            password = "";
        }
    }

    //Showing the password if bShowPwd is true
    if(bShowPwd){   
        document.getElementById("show-password").value = password;

        document.getElementById("copytext").disabled = false; //enable the copytext button
        document.getElementById("copytext").style.backgroundColor = "darkgreen";//set the color of copytext button to darkgreen
    }    
}

// copytoClip() get the text from the textarea and using .exeCommad('copy') on DOM copies the content to clipboard.
function copytoClip() {
    
    var clipText = document.getElementById("show-password");

    clipText.disabled = false;//google chrome only allows the content to be selected or copied if the textarea is not disabled.
    clipText.select();
    document.execCommand("copy");
    clipText.disabled = true; //once copied setting the textarea back to disabled to avoid user manipulation
}