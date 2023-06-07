// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
// Defining a function to validate form
function validateForm() {
  // Retrieving the values of form elements
  var firstname = document.contactForm.fname.value;
  var lastname = document.contactForm.lname.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var country = document.contactForm.country.value;
  var gender = document.contactForm.gender.value;
  var hobbies = [];
  var checkboxes = document.getElementsByName("hobbies[]");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      // Populate hobbies array with selected values
      hobbies.push(checkboxes[i].value);
    }
  }
  // Defining error variables with a default value
  var fnameErr =
    (lnameErr =
    emailErr =
    mobileErr =
    countryErr =
    genderErr =
    termsErr =
      true);
  // Validate firstname
  if (firstname == "") {
    printError("fnameErr", "Please enter your firstname");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(firstname) === false) {
      printError("fnameErr", "Please enter a valid firstname");
    } else {
      printError("fnameErr", "");
      fnameErr = false;
    }
  }
  // Validate lastname
  if (lastname == "") {
    printError("lnameErr", "Please enter your lastname");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lastname) === false) {
      printError("lnameErr", "Please enter a valid lastname");
    } else {
      printError("lnameErr", "");
      lnameErr = false;
    }
  }

  // Validate email address
  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  // Validate mobile number
  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    var regex = /^[0-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  // Validate country

  if (country == "Select") {
    printError("countryErr", "Please select your country");
  } else {
    printError("countryErr", "");
    countryErr = false;
  }

  // Validate gender

  if (gender == "") {
    printError("genderErr", "Please select your gender");
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  // validating terms and condition

  if (!contactForm.terms.checked) {
    printError("termsErr", "Please accept the terms & condition");
  } else {
    printError("termsErr", "");
    termsErr = false;
  }

  // Prevent the form from being submitted if there are any errors
  if (
    (fnameErr ||
      lnameErr ||
      emailErr ||
      mobileErr ||
      countryErr ||
      genderErr ||
      termsErr) == true
  ) {
    return false;
  } else {
    // Creating a string from input data for preview
    var dataPreview =
      "You've entered the following details: \n" +
      "First Name: " +
      firstname +
      "\n" +
      "Last Name: " +
      lastname +
      "\n" +
      "Email Address: " +
      email +
      "\n" +
      "Mobile Number: " +
      mobile +
      "\n" +
      "Country: " +
      country +
      "\n" +
      "Gender: " +
      gender +
      "\n";
    if (hobbies.length) {
      dataPreview += "Hobbies: " + hobbies.join(", ");
    }
    // Display input data in a dialog box before submitting the form
    alert(dataPreview);
  }
}


// window.location = "welcome.html";   //redirect to another page
// return true;