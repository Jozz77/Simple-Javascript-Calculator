
let myMentorMessage = 'Hi Mentors, I am very sorry to share the link to my Github page instead of the link to my repository. The repository link will appear after the operation has been completed. Thanks for understanding. Click Ok to view the assignment';

alert(myMentorMessage)
var opr = prompt("Choose your arithmetic symbol you want to perform the calculation on (either +,-,*,/): ")
var num1 = parseInt(prompt("Enter the first number: "))
var num2 = parseInt(prompt("Enter the second number:"))




if (opr == "+")
{
    result = num1 + num2;
   
} else if (opr == "-")
{
    result = num1 - num2;
} else if (opr == "*")
{
    result = num1 * num2;
} else if (opr == "/")
{
    result = num1 / num2;
} else {
    window.alert("Your input is invalid...Please refresh and input correct values")
    
}

window.alert("The result of your calculation is "  + result );

// window.alert("Please refresh to perform more calculations");
