document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('data.json');
  const data = await response.json();
  const user = data.users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html";
  } else {
    document.getElementById('error').innerText = "Invalid credentials";
  }
});
