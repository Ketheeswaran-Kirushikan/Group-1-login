function subscribe() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('error-message').style.display = 'none';
    setTimeout(() => {
        document.getElementById('error-message').style.display = 'block';
        document.querySelector('.loader').style.display = 'none';
    }, 2000);
}


const screenPopup = document.getElementById('login-form');

function closePopup(event) {
    if (event.target.classList.contains('close-btn')) {
        event.stopPropagation();
        screenPopup.style.display = 'none';
    }
}


screenPopup.addEventListener('click', closePopup);
