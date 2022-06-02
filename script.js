const password = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const avatar1 = document.querySelector("#avatar-1");
const avatar2 = document.querySelector("#avatar-2");
const avatar3 = document.querySelector("#avatar-3");
const avatarDisplay = document.querySelector(".avatar-display");
let avatarFlag1 = false;
let avatarFlag2 = false;
let avatarFlag3 = false;

password.addEventListener("input", fillPasswordSVG);
confirmPwd.addEventListener("input", displayError);
password.addEventListener("blur", displayError);
confirmPwd.addEventListener("input", fillConfirmPwdSVG);

avatar1.addEventListener("click", () => {
  const ricehat = document.querySelector(".ricehat");
  const liFirst = document.querySelector("li:first-child");
  if (avatarFlag1 == true) {
    if (window.innerWidth <= 800) {
      avatarDisplay.style.display = 'none';
    } else {
      avatarDisplay.style.display = 'block';
    }
    avatarFlag1 = false;
    avatarDisplay.style.backgroundImage = "none";
    liFirst.style.minHeight = "none";
    ricehat.classList.remove('ricehat-after-avatar');
  } else {
    if (window.innerWidth >= 800) {
      ricehat.classList.add('ricehat-after-avatar');
      liFirst.style.minHeight = "6.89rem";
    } else {
      avatarDisplay.style.display = 'block';
    }
    avatarFlag1 = true;
    avatarDisplay.style.backgroundImage = "url('Photos/moto2.jpg')";
  }
  avatarFlag2 = false;
  avatarFlag3 = false;
});
avatar2.addEventListener("click", () => {
  const ricehat = document.querySelector(".ricehat");
  const liFirst = document.querySelector("li:first-child");
  if (avatarFlag2 == true) {
    if (window.innerWidth <= 800) {
      avatarDisplay.style.display = 'none';
    } else {
      avatarDisplay.style.display = 'block';
    }
    avatarFlag2 = false;
    avatarDisplay.style.backgroundImage = "none";
    liFirst.style.minHeight = "none";
    ricehat.classList.remove('ricehat-after-avatar');
  } else {
    if (window.innerWidth >= 800) {
      ricehat.classList.add('ricehat-after-avatar');
      liFirst.style.minHeight = "6.89rem";
    } else {
      avatarDisplay.style.display = 'block';
    }
    avatarFlag2 = true;
    avatarDisplay.style.backgroundImage = "url('Photos/canyoning.jpg')";
  }
  avatarFlag1 = false;
  avatarFlag3 = false;
});
avatar3.addEventListener("click", () => {
  const ricehat = document.querySelector(".ricehat");
  const liFirst = document.querySelector("li:first-child");
  if (avatarFlag3 == true) {
    if (window.innerWidth <= 800) {
      avatarDisplay.style.display = 'none';
    } else {
      avatarDisplay.style.display = 'block';
    }
    avatarFlag3 = false;
    avatarDisplay.style.backgroundImage = "none";
    liFirst.style.minHeight = "none";
    ricehat.classList.remove('ricehat-after-avatar');
  } else { 
    if (window.innerWidth >= 800) {
      ricehat.classList.add('ricehat-after-avatar');
      liFirst.style.minHeight = "6.89rem";
    } else {
      avatarDisplay.style.display = 'block';
    }
    avatarFlag3 = true;
    avatarDisplay.style.backgroundImage = "url('Photos/hammock.jpg')";
  }
  avatarFlag1 = false;
  avatarFlag2 = false;
})


function displayError() {
  const userPassword = password.value;
  const regexMatch = new RegExp(password.getAttribute("pattern"));

  if (password.value == confirmPwd.value) {
    confirmPwd.setCustomValidity("");
  }
  else {
    confirmPwd.setCustomValidity("Passwords must match");
  }
  if (userPassword.match(regexMatch)) {
    password.setCustomValidity("");
  }
  else {
    password.setCustomValidity("Passwords must match");
  }
}

function fillPasswordSVG() {
  const lowerCase = new RegExp("[a-z]", "g");
  const upperCase =  new RegExp("[A-Z]", "g");
  const number = new RegExp("[0-9]", "g");
  const triangle = document.querySelector("#triangle");
  const upsideDown = document.querySelector("#upsidedown-tri");
  const leftEar = document.querySelector("#left-ear");
  const rightEar = document.querySelector("#right-ear");

  const userPassword = password.value;

  userPassword.match(lowerCase) ? upsideDown.setAttribute('fill-opacity', "1") :
    upsideDown.setAttribute('fill-opacity', "0");

  userPassword.match(upperCase) ? leftEar.setAttribute('fill-opacity', "1") :
    leftEar.setAttribute('fill-opacity', "0");

  userPassword.match(number) ? rightEar.setAttribute('fill-opacity', "1") :
    rightEar.setAttribute('fill-opacity', "0");

  userPassword.length >= 8 ? triangle.setAttribute('fill-opacity', "1") :
    triangle.setAttribute('fill-opacity', "0");
}

function fillConfirmPwdSVG() {

  if (password.value == "") return;
  const triangle = document.querySelector("#triangle2");
  const upsideDown = document.querySelector("#upsidedown-tri2");
  const leftEar = document.querySelector("#left-ear2");
  const rightEar = document.querySelector("#right-ear2");

  let passwordLength = password.value.length;
  
  password.value.slice(0, (Math.floor(passwordLength * .25))) == 
    confirmPwd.value.slice(0, (Math.floor(passwordLength * .25))) ? 
    upsideDown.setAttribute('fill-opacity', "1") :
    upsideDown.setAttribute('fill-opacity', "0");

  password.value.slice(0, (Math.floor(passwordLength * .5))) == 
    confirmPwd.value.slice(0, (Math.floor(passwordLength * .5))) ? 
    leftEar.setAttribute('fill-opacity', "1") :
    leftEar.setAttribute('fill-opacity', "0");

  password.value.slice(0, (Math.floor(passwordLength * .75))) == 
    confirmPwd.value.slice(0, (Math.floor(passwordLength * .75))) ? 
    rightEar.setAttribute('fill-opacity', "1") :
    rightEar.setAttribute('fill-opacity', "0");

  password.value == confirmPwd.value ? 
    triangle.setAttribute('fill-opacity', "1") :
    triangle.setAttribute('fill-opacity', "0");
}
