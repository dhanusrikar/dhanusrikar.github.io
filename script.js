function calculateTip() {
  var amount = document.getElementById("amount").value;
  var service = document.getElementById("service").value;
  var people = document.getElementById("people").value;

  if (amount === "" || service === 0) {
    alert("please enter values");
    return;
  }

  if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (amount * service) / people;
  total = Math.round(total * 100) / 100;

  total = total.toFixed(2);
  document.getElementById("tip-amount").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("tip-amount").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function () {
  calculateTip();
};
