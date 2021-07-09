
function formInfo(event)
{
    event.preventDefault();

    const textFields = document.getElementsByTagName('input')

    const userInput = '';
    const inputString = '';

    for(let i=0; i<textFields.length; i++)
    {

    const textField = textFields[i]; 
        if(textField.type == 'radio')
        {
            return false;
        }
        else
        {
            console.log('You entered ' + textField.value);
        }
    }
}

function submitForm()
{   
    alert("Thank you.  The form information has been received.");
   
}

const form = document.getElementById('checkout-form');

const submitButton = document.createElement ('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitButton.style.width = '15rem';
submitButton.style.height = '2rem';
submitButton.color = 'white';

form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
    event.preventDefault();  //page won't refresh

    alert('Thank you.  The form information has been received.');
    reloadForm();

});

function reloadForm()
{
    document.getElementById("checkout-form").reset();
}
