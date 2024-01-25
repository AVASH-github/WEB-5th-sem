function btn_actn() {
    var username = document.getElementById("id").value;
    var password = document.getElementById("pw").value;
    var email=document.getElementById("email").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("email",email);

    window.location.href = "ShowForm.html";
}