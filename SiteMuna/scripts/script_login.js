const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Verify if the entered email and password match the expected values
  if (email === 'Muna Vongs' && password === 'Amo_o_gzin') {
    // Redirect to another page or perform other actions
    window.location.href = 'main.html';
  } else {
    alert('Invalid email or password');
  }
});