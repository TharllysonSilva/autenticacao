const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const contato  = loginForm.contato.value;

    if (username === "user" && password === "web_dev" && contato === "contato") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
var data = "{\"Sender\":\"sender_id\",\"Receivers\":\"phone_number\",\"ContextRuleName\":\"rule_name\"}";

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://sms.comtele.com.br/api/v2/sendcontextmessage");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("auth-key", "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");

  xhr.send(data);