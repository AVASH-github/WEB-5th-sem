
var username = localStorage.getItem("username");
var password = localStorage.getItem("password");
var email=localStorage.getItem("email");

var displayContainer = document.getElementById("displayContainer");
displayContainer.innerText = "Username: " + username + "\n \n Password: " + password+ "\n \n Email: " + email;