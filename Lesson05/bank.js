//Bank application that allows user to:
//check balance, make a deposit and make a withdrawal
//from the account

let balance = 500;  //initial balance
let debit;
let credit;

let getInput = true;

while(getInput) 
{
    const userAction = 
    prompt('Please enter your option below.\n\n' + 
    'Q to Quit\n' +
    'W to withdraw\n' +
    'D to deposit\n' +
    'B to view balance\n');

    switch (userAction.toUpperCase()) 
    {
        case 'W': 
        {
            debit = prompt('Please enter amount to withdraw.');
        
            if(balance - Number(debit) < 0)
            {
                alert('Your withdrawal exceeds the amount you currently have in your account.');

            }
            else if(balance - Number(debit) < 300)
            {
            let userConfirm = confirm('Your balance is less than $300.  Are you sure you wish to make this withdrawal?');
            
                if(!userConfirm)
                {
                    balance = balance - 0;
                }
                else
                {
                    balance = balance - Number(debit);
                }
            }
            else
                {
                    balance = balance - Number(debit);
                }
            break;

        }
        case 'D': 
        {
            credit = prompt('Please enter amount to deposit.');
            if(credit > 50000 || credit < 0)
            {
                alert('Please enter an amount between $1 and $50,000.');
            }
            balance = Number(balance) + Number(credit);
            break;
        }
        case 'B': 
        {
            alert('Your current balance is: $' + balance.toFixed(2));
            break;
        }
        case 'Q':
        {
            getInput = false;
            break;
        }
    }
    
}