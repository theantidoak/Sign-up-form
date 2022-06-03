const password = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const avatar1 = document.querySelector("#avatar-1");
const avatar2 = document.querySelector("#avatar-2");
const avatar3 = document.querySelector("#avatar-3");
const avatarArray = [avatar1, avatar2, avatar3];
const avatarDisplay = document.querySelector(".avatar-display");
const avatarDisplayLaptop = document.querySelector(".avatar-display-laptop");

let avatarFlag1 = false;
let avatarFlag2 = false;
let avatarFlag3 = false;


password.addEventListener("input", fillPasswordSVG);
confirmPwd.addEventListener("input", displayError);
password.addEventListener("blur", displayError);
confirmPwd.addEventListener("input", fillConfirmPwdSVG);
avatarArray.forEach((avatar) => avatar.addEventListener("click", makeProfilePic));


function makeProfilePic(e) {
  const ricehat = document.querySelector(".ricehat");
  const ricehatRight = document.querySelector(".ricehat-after-avatar-right");
  const liFirst = document.querySelector("li:first-child");
  
  if ((avatarFlag1 && e.target.id == "avatar-1") ||
  (avatarFlag2 && e.target.id == "avatar-2") ||
  (avatarFlag3 && e.target.id == "avatar-3")) {
    if (window.innerWidth <= 801) {
      avatarDisplay.style.display = 'none';
    } 
    ricehat.classList.remove('ricehat-after-avatar');
    ricehatRight.style.display = "none";
    liFirst.style.minHeight = "none";
    avatarDisplay.style.backgroundImage = "none";
    avatarDisplayLaptop.style.backgroundImage = "none";
  } else {
    if (window.innerWidth >= 801) {
      ricehat.classList.add('ricehat-after-avatar');
      ricehatRight.style.display = "inline";
      liFirst.style.minHeight = "6.89rem";
      avatarDisplay.style.display = "none";
    } else {
      avatarDisplay.style.display = 'block';
    }
  }

  switch (e.target.id) {
    case 'avatar-1':
      if (!avatarFlag1) { 
        avatarDisplayLaptop.style.backgroundImage = "url('Photos/moto2.jpg')";
        avatarDisplay.style.backgroundImage = "url('Photos/moto2.jpg')";
      }
      avatarFlag1 = !avatarFlag1;
      avatarFlag2 = false;
      avatarFlag3 = false;
      break;
    case 'avatar-2':
      if (!avatarFlag2) {
        avatarDisplayLaptop.style.backgroundImage = "url('Photos/canyoning.jpg')";
        avatarDisplay.style.backgroundImage = "url('Photos/canyoning.jpg')";
      }
      avatarFlag2 = !avatarFlag2;
      avatarFlag1 = false;
      avatarFlag3 = false;
      break;
    case 'avatar-3':
      if (!avatarFlag3) {
        avatarDisplayLaptop.style.backgroundImage = "url('Photos/hammock.jpg')";
        avatarDisplay.style.backgroundImage = "url('Photos/hammock.jpg')";
      }
      avatarFlag3 = !avatarFlag3;
      avatarFlag1 = false;
      avatarFlag2 = false;
  }
}


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
