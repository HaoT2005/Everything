const userName = document.getElementById('username');
const passWord = document.getElementById('password');
const btn = document.getElementById('btn');
function check() {
  if (userName.value === "HaoTang" && passWord.value === "0938382567") {
    window.open("keys.html");
  }
  else {
    alert("Incorrect UserName or PassWord");
  }
}
btn.addEventListener("click", check);
