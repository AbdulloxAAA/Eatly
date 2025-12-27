const telegram_bot_id = "8339355653:AAFVWzjoOZF02ZgL5j_JYlyxm4fIJcIzyHc";
const chat_id = 7962434476;

// ================= SEND FUNCTION =================
function sendTelegramMessage() {
  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const messageText = document.getElementById("user-message").value;

  const message =
    "📩 Yangi murojaat:\n\n" +
    "👤 Ismi: " + name + "\n" +
    "📧 Email: " + email + "\n" +
    "📝 Xabar: " + messageText;

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
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Xabar muvaffaqiyatli yuborildi ✅");

        // inputlarni tozalash
        document.getElementById("user-name").value = "";
        document.getElementById("user-email").value = "";
        document.getElementById("user-message").value = "";
      } else {
        alert("Xatolik yuz berdi ❌");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Server bilan bog‘lanib bo‘lmadi ❌");
    });

  return false; // sahifa refresh bo‘lmasligi uchun
}