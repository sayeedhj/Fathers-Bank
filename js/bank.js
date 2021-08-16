document.getElementById('loginSubmit').addEventListener('click', function () {
    const emailField = document.getElementById('userEmail');
    const usermail = emailField.value;
    // user password
    const passwordField = document.getElementById('userPassword');
    const userps = passwordField.value;

    if (usermail == 'sayeedhasanjisad@gmail.com', 'fahad@gmail.com' && userps == 'Jisad123', 'Fahad123') {
        window.location.href = 'banking.html'
    }
})