addEventListener('load', ()=>{
    
    const button = document.getElementById('email-button');

    button.addEventListener('click', (e) => {
        const input = document.getElementById('email');
        const inputText = input.value;

        if (inputText === "") {
            error("Email required!");
        }
        else {
            if (!validateEmail(inputText)) {
                error("Please enter valid email address");
            }
            else {
                showOverlay();
                showPopup();
            }
        }
      
    })

});

function error(errorText) {
    const spanError = document.getElementById('span-error');

    spanError.style.display = 'block';
    spanError.innerHTML = errorText;
}


function validateEmail(email) {
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
}

function showPopup () {
    const popup   = document.getElementById('card-popup');
    popup.style.display = 'block';
}

function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
}

function closePopup() {
    const popup   = document.getElementById('card-popup');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}