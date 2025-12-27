//bot token
var telegram_bot_id = "8339355653:AAFVWzjoOZF02ZgL5j_JYlyxm4fIJcIzyHc"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
var chat_id = 7962434476;

function sendtelegram() {
    let email = document.getElementById("email").value;

    fetch("https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: "Email: " + email
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Yuborildi ✅");
        document.getElementById("email").value = "";
    })
    .catch(err => {
        alert("Xatolik ❌");
        console.log(err);
    });

    return false;
}
