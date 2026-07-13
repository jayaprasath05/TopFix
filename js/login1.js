let isSignUpMode = false;
        
        const pageTitle = document.getElementById('pageTitle');
        const submitBtn = document.getElementById('submitBtn');
        const nameField = document.getElementById('nameField');
        const confirmPasswordField = document.getElementById('confirmPasswordField');
        const toggleModeBtn = document.getElementById('toggleModeBtn');
        const toggleText = document.getElementById('toggleText');
        const helpLink = document.querySelector('.help');
        const nameInput = document.getElementById('name');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const authForm = document.getElementById('authForm');
        
        function toggleMode() {
            isSignUpMode = !isSignUpMode;
            if (isSignUpMode) {
                pageTitle.textContent = 'Create Account';
                submitBtn.textContent = 'Create your laptop service account';
                nameField.style.display = 'block';
                nameInput.required = true;
                confirmPasswordField.style.display = 'block';
                confirmPasswordInput.required = true;
                helpLink.style.display = 'none';
                toggleText.textContent = 'Already have an account?';
                toggleModeBtn.textContent = 'Sign-In';
                toggleModeBtn.style.background = '#e7e9ec';
                toggleModeBtn.style.borderColor = '#adb1b8';
            } else {
                pageTitle.textContent = 'Sign-In';
                submitBtn.textContent = 'Sign-In';
                nameField.style.display = 'none';
                nameInput.required = false;
                nameInput.value = '';
                confirmPasswordField.style.display = 'none';
                confirmPasswordInput.required = false;
                confirmPasswordInput.value = '';
                helpLink.style.display = 'inline-block';
                toggleText.textContent = 'New to laptop service?';
                toggleModeBtn.textContent = 'Create your laptop service account';
                toggleModeBtn.style.background = '';
                toggleModeBtn.style.borderColor = '';
            }
        }
        
        toggleModeBtn.addEventListener('click', toggleMode);

        authForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (isSignUpMode) {
                const name = nameInput.value;
                const confirmPassword = confirmPasswordInput.value;
                if (password !== confirmPassword) {
                    alert("Passwords do not match!");
                    return;
                }
                alert(`Account created successfully for ${name} (${email})!\nYou can now sign in.`);
                toggleMode(); // Toggle back to sign-in
            } else {
                alert(`Welcome back!\nSigning in as ${email}...`);
                window.location.href = 'homepage.html';
            }
        });

