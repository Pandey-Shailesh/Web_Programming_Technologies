// reset() function script
function reset() {
  opt.value = 0;
  opt2.value = 0;
  opt3.value = 0;
}
// getDate() function script
function getDate() {
  var ch = opt.value;
  if (ch == 1) {
    date1.innerHTML = "08/06/2023";
    date2.innerHTML = "09/06/2023";
  }
  if (ch == 2) {
    date1.innerHTML = "10/06/2023";
    date2.innerHTML = "11/06/2023";
  }
}
// getTime() function script
function getTime() {
  var ch = opt2.value;
  if (ch == 1) {
    show1.innerHTML = "10:30 AM";
    show2.innerHTML = "02:00 PM";
  }
  if (ch == 2) {
    show1.innerHTML = "03:00 PM";
    show2.innerHTML = "06:00 PM";
  }
}
function price() {
  try {
    price1 = tick.value * 150;
    if (price1 == "") {
      throw "Err1";
    } else if (price1 < 0) {
      throw "Err2";
    } else if (isNaN(price1) || price1 == 0) {
      throw "Err3";
    } else {
      priceDisplay.innerHTML = "Total Ticket Cost is: " + price1;
      tickets.innerHTML = "You have booked " + tick.value + "ticket(s)";
      tick.value = "";
    }
  } catch (error) {
    if (error == "Err1") {
      alert("Please enter the number of tickets");
    }
    if (error == "Err2") {
      alert(
        "Number of tickets should not be negative! Please enter valid no of tickets"
      );
    }
    if (error == "Err3") {
      alert("Number of tickets should be greater than zero");
    }
  }
}
