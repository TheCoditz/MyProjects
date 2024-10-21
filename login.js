document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                // Redirect to a dashboard or home page
                window.location.href = '/dashboard';
            } else {
                console.error('Login failed');
                // Display an error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
            // Display an error message to the user
        }
    });
});
