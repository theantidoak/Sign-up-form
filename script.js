const password = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");

password.addEventListener("input", fillPasswordSVG);
confirmPwd.addEventListener("input", matchPassword);
confirmPwd.addEventListener("input", fillConfirmPwdSVG);
password.addEventListener("blur", displayError);

function displayError() {
  const userPassword = password.value;
  let regexMatch = new RegExp(password.getAttribute("pattern"));
  console.log(regexMatch);
  if (userPassword.match(regexMatch)) {
    console.log('hi');
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
  const triangle = document.querySelector("#triangle2");
  const upsideDown = document.querySelector("#upsidedown-tri2");
  const leftEar = document.querySelector("#left-ear2");
  const rightEar = document.querySelector("#right-ear2");

  let passwordLength = password.value.length;

  console.log(passwordLength);
  console.log(Math.floor(passwordLength / 4));
  console.log(Math.floor(passwordLength / 2));
  console.log(Math.floor(passwordLength * .75));

  Math.floor(passwordLength / 4) <= confirmPwd.value.length ? 
    upsideDown.setAttribute('fill-opacity', "1") :
    upsideDown.setAttribute('fill-opacity', "0");

  Math.floor(passwordLength / 2) <= confirmPwd.value.length ? 
    leftEar.setAttribute('fill-opacity', "1") :
    leftEar.setAttribute('fill-opacity', "0");

  Math.floor(passwordLength * .75) <= confirmPwd.value.length ? 
    rightEar.setAttribute('fill-opacity', "1") :
    rightEar.setAttribute('fill-opacity', "0");

  passwordLength == confirmPwd.value.length ? 
    triangle.setAttribute('fill-opacity', "1") :
    triangle.setAttribute('fill-opacity', "0");
}

function matchPassword() {
  if (password.value == confirmPwd.value) {
    confirmPwd.setCustomValidity("");
  }
  else {
    confirmPwd.setCustomValidity("Passwords must match");
  }
}