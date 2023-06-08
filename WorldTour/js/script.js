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
  parks = opt2.value;

try {
    if (parks == "1") {
        throw "Err1";
      } else {
        throw "Err2";
      }
} catch (error) {
    if (error == "Err1") {
              alert("Please enter the number of tickets");
            }
}






}
