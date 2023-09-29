let eyeBallLeft = document.getElementById("eyeball-left");
let pupilLeft = document.getElementById("pupil-left");
let eyeAreaLeft = eyeBallLeft.getBoundingClientRect();

let eyeBallRight = document.getElementById("eyeball-right");
let pupilRight = document.getElementById("pupil-right");
let eyeAreaRight = eyeBallRight.getBoundingClientRect();

let R = eyeAreaLeft.width / 2;

let centerXLeft = eyeAreaLeft.left + R;
let centerYLeft = eyeAreaLeft.top + R;
let centerXRight = eyeAreaRight.left + R;
let centerYRight = eyeAreaRight.top + R;

pupilLeft.style.transformOrigin = "38px 38px";
pupilRight.style.transformOrigin = "52px 38px";


document.addEventListener("mousemove", (e) => {
  let xL = e.clientX - centerXLeft,
    yL = e.clientY - centerYLeft,
    thetaL = Math.atan2(yL, xL),
    angleL = (thetaL * 180) / Math.PI + 360;
  pupilLeft.style.rotate = `${angleL}deg`;

  let xR = e.clientX - centerXRight,
    yR = e.clientY - centerYRight,
    thetaR = Math.atan2(yR, xR),
    angleR = (thetaR * 180) / Math.PI + 360;
  pupilRight.style.rotate = `${angleR}deg`;
});

