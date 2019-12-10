# Password-Generator
This application was developed using Bootstrap 4.3.1, HTML 5.0, CSS3 and JavaScript.

### Overview
This is an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by the JavaScript code.

### Features
The user will be prompted to choose from the following password criteria:

* Length (must be between 8 and 128 characters)

* Character type:

    - Special characters [see examples](https://www.owasp.org/index.php/Password_special_characters)
    - Numeric characters
    - Lowercase characters
    - Uppercase characters

The application will validate user input and ensure that ***at least one character type is selected.***

Once all prompts are answered, the _user will be presented with a password matching the answered prompts_. The password will be displayed to the page.

As a bonus, the user have the option to _click a button to copy the password to their clipboard_.

**Below is the screenshot of the application.**

![PasswordGenUI](https://user-images.githubusercontent.com/54964461/70488825-e326b400-1ac7-11ea-8ce2-35a6f770f9d5.png)

You can visit my app here : [https://smaji08.github.io/Password-Generator/](https://smaji08.github.io/Password-Generator/)

### My Experience

The approach was to check the validations and then once all are met, to call the function to generate password. The challenge here was ensuring only the numbers are allowed in the password length text column. I have used RegEx for checking the null as well as undefined values for this.

The logic for generating password was to first generate a string depending on the criteria selected, and then randomizing the string for the password length and then showing the result in the textarea on the screen.

One of the challenges was to make sure a numeral is present (while more than 2 criteria are selected) in the randomly selected password. Checked the presence of numeral using RegEx and called the randomize function until it has a number.

The Bonus functionality added was copying the password to the clipboard. This was achieved using DOM s `document.execCommand("copy")`. The challenge here was that though the command returned true, the content was not really copying to clipboard when using Chrome or Firefox and worked in Microsoft Edge. Later found out that Chrome or Firefox doesnt allow copying froma hidden or disabled text or textarea.

Needs to work on - to generate password which always includes all the selected criteria all the time.  

### Credits

http://stackoverflow.com/
https://www.w3schools.com/
https://css-tricks.com/




