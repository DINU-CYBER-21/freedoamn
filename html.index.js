<!DOCTYPE html>
<html>
<head>
  <title>Free Fire Guide Login</title>
</head>
<body>
  <h2>Register</h2>
  <form onsubmit="registerUser(event)">
    <input type="email" id="email" placeholder="Email" required><br>
    <input type="password" id="password" placeholder="Password" required><br>
    <button type="submit">Register</button>
  </form>
  <p id="msg"></p>

  <script>
    async function registerUser(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      document.getElementById('msg').innerText = data.message;
    }
  </script>
</body>
</html>
