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
window.alert("Please refresh to perform more calculations");
