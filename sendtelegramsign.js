/* TELEGRAM CONFIG */
const telegram_bot_id = "8339355653:AAFVWzjoOZF02ZgL5j_JYlyxm4fIJcIzyHc";
const chat_id = 7962434476;

/* PASSWORD SHOW / HIDE */
function togglePassword() {
  const input = document.getElementById("user-password");
  input.type = input.type === "password" ? "text" : "password";
}

/* SEND TO TELEGRAM */
function sendTelegramMessage() {
  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;

  const message =
    "🆕 New Sign Up\n\n" +
    "👤 Name: " + name + "\n" +
    "📧 Email: " + email + "\n" +
    "🔐 Password Length: " + password.length;

  fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.ok) {
      alert("Successfully sent ✅");
      document.querySelector(".signup__form").reset();
    } else {
      alert("Telegram error ❌");
    }
  })
  .catch(err => {
    alert("Network error ❌");
    console.error(err);
  });

  return false; // form reload bo‘lmasligi uchun
}