function toggleLoginForm() {
    var loginForm = document.getElementById('login-form');
    var landingPageText = document.getElementById('landingpage-text');
    if (loginForm.classList.contains('d-none')) {
      loginForm.classList.remove('d-none');
      landingPageText.classList.add('d-none');

    } else {
      loginForm.classList.add('d-none');
      landingPageText.classList.remove('d-none');
    }
  }
const screenPopup = document.getElementById('login-form');

function closePopup(event) {
    if (event.target.classList.contains('close-btn')) {
        event.stopPropagation();
        screenPopup.style.display = 'none';
    }
}


screenPopup.addEventListener('click', closePopup);
