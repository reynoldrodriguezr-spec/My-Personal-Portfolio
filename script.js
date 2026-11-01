// Copy email button
const btn = document.getElementById('copy');
const email = document.getElementById('email');
if (btn && email) {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email.textContent.trim());
      btn.textContent = 'Copied';
    } catch (e) {
      btn.textContent = 'Press Ctrl+C';
    }
    setTimeout(() => (btn.textContent = 'Copy'), 1800);
  });
}
