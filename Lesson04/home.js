function squareNumber()
{
    //ask user for a number
    let input = prompt('Please enter a number.');
    
    //square the number taken from user
    let result = Number(input) * Number(input);


    //display result
    alert(input + ' squared is ' + result);
    
}

//optional assignment
// function multiplyTwoNumbers(x, y)
// {
//     x = prompt('Please enter first number.');
//     y = prompt('Please enter second number.');

//     let result = Number(x) * Number(y);

//     alert(result);
// }