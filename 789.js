const _7 = "seven";
let _8 = "eight";
const _9 = "nine";

var whyNoVersion9 = function() {
  document.getElementById("answer").innerHTML = `Because ${_7} ${_8} ${_9}`;
};

var change8 = () => {
  _8 = "'ATE'";
  document.getElementById(
    "huh"
  ).innerHTML = `Answer: Because ${_7} ${_8} ${_9}`;
};
