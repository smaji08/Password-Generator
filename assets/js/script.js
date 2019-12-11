//assigning the DOM elements to variables
var generateBtn = document.querySelector("#genPassword");
var copyBtn = document.querySelector("#copytext");
var checkForm = document.querySelector("#checkbox-form");
var passwordText = document.querySelector("#show-password");

var lenCheckForm = checkForm.length;


// Function for validating the user inputs
function validateInputs(){
    
    var intCountCheckbox = 0;
    var pwdLengthEl = document.getElementById("pwdLength");
    var pwdLength = pwdLengthEl.value;
    var intPwdLength = parseInt(pwdLength);
    var bValidation = true; //set to true in the assumption that all user inputs are valid

    //getting the number(intCountCheckbox) of checkboxes which are not checked
    for (var i = 0; i < lenCheckForm; i++ ) {
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
        pwdLengthEl.value="";
        pwdLengthEl.focus();
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
    for (i=0; i<lenCheckForm;i++){
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

    //Showing the password if bShowPwd is true and enable the copy to Clipboard button
    if(bShowPwd){   
        passwordText.value = password;
    
        copyBtn.removeAttribute("disabled");
        copyBtn.style.backgroundColor = "darkgreen";
        copyBtn.focus();
    }    
}

// copytoClip() get the text from the textarea and using .exeCommad('copy') on DOM copies the content to clipboard.
function copytoClip() {
    
    passwordText.disabled = false;//google chrome only allows the content to be selected or copied if the textarea is not disabled.
    passwordText.select();
    document.execCommand("copy");
    passwordText.disabled = true; //once copied setting the textarea back to disabled to avoid user manipulation
}

//Event listener for button clicks
generateBtn.addEventListener("click", validateInputs);
copyBtn.addEventListener("click", copytoClip);