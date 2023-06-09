// reset() function script
function reset() {
  opt.value = 0;
  opt2.value = 0;
}

// getCity() function script
function getCity() {
  var ch = opt.value;
  if (ch == 1) {
    city1.innerHTML = "Nagpur";
    city2.innerHTML = "Pune";
  }
  if (ch == 2) {
    city1.innerHTML = "New York";
    city2.innerHTML = "Washington";
  }
  if (ch == 3) {
    city1.innerHTML = "Sydney";
    city2.innerHTML = "Newcastle";
  }
  if (ch == 4) {
    city1.innerHTML = "London";
    city2.innerHTML = "Great Britain";
  }
}

function view() {
  country = opt.value;
  parks = opt2.value;
try{
  if (country == "1" || parks =="1") {
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
