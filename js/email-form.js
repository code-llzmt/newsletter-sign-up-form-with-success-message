

// buttons
const formButton = document.querySelector('.form-button');
const thanksButton = document.querySelector('.thanks-button');

// cards
const signupFormCard = document.querySelector('.sign-up-form-card');
const successMessageCard = document.querySelector('.success-message-card');

// email field
const emailField = document.querySelector('.email-field');

// regex
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// error-message
const errorMessage = document.querySelector('.email-error-message');

// email added
const emailAdded =  document.querySelector('.email-added');


// form
formButton.addEventListener('click', () => {

    if(emailField.value.length == 0 || !emailField.value.match(regex)){

        // email field error style
        emailField.style.color = 'hsl(4, 100%, 67%)'; /* Tomato */
        emailField.style.backgroundColor = 'hsl(4, 100%, 67%, 0.2)'; /* Light Tomato */
        emailField.style.border = '1px solid hsl(4, 100%, 67%)'; /* Tomato */

        // show error message
        errorMessage.style.display = 'block';

    }else{
        signupFormCard.style.display = 'none';
        successMessageCard.style.display = 'flex';

        emailAdded.textContent = emailField.value;

        // clear email field error style
        emailField.style.color = 'hsl(235, 18%, 26%)'; /* Charcoal Grey */
        emailField.style.backgroundColor = 'hsl(0, 0%, 100%)'; /* White */
        emailField.style.border = '1px solid hsl(231, 7%, 60%)'; /* Grey */

        // clear error message
        errorMessage.style.display = 'none';
    }

});

// thanks
thanksButton.addEventListener('click', () => {

    successMessageCard.style.display = 'none';
    signupFormCard.style.display = 'flex';

    // clean the email input field
    emailField.value = '';
});