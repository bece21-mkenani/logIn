const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', ()=>{
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
        
    } else {
        passwordInput.type = 'password';
        togglePassword.classList.add('fa-eye-slash');
        togglePassword.classList.remove('fa-eye');
    }
});