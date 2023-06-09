
    function validateForm() {
      var username = document.forms["SignIn"]["username"].value;
      var password = document.forms["SignIn"]["password"].value;

      // Validate first name
      if (username == "") {
        alert("Please enter your username.");
        return false;
      }

      // Validate password
      if (password == "") {
        alert("Please enter a password.");
        return false;
      }

      // Add any additional validation rules here

      return true; // Form is valid
    }
    function registrationForm() {
        var firstName = document.forms["registrationForm"]["firstName"].value;
        var fastMailId = document.forms["registrationForm"]["fastMailId"].value;
        var password = document.forms["registrationForm"]["password"].value;
        var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
        var dob = document.forms["registrationForm"]["dob"].value;
        var gender = document.forms["registrationForm"]["gender"].value;
        var country = document.forms["registrationForm"]["country"].value;

        // Validate first name
        if (firstName == "") {
          alert("Please enter your first name.");
          return false;
        }

        // Validate FastMail ID
        if (fastMailId == "") {
          alert("Please choose your FastMail ID.");
          return false;
        }

        // Validate password
        if (password == "") {
          alert("Please enter a password.");
          return false;
        }

        // Validate password confirmation
        if (confirmPassword == "") {
          alert("Please confirm your password.");
          return false;
        }

        // Check if password and confirm password match
        if (password != confirmPassword) {
          alert("Password and confirm password do not match.");
          return false;
        }

        // Validate date of birth
        if (dob == "") {
          alert("Please enter your date of birth.");
          return false;
        }

        // Validate gender
        if (gender == "") {
          alert("Please select your gender.");
          return false;
        }

        // Validate country
        if (country == "") {
          alert("Please select your country.");
          return false;
        }

        return true; // Form is valid
      }

      function resetForm() {
        document.getElementById("registrationForm").reset();
      }