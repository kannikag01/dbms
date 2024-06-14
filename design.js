function validateSignUpForm() {
    var fullName = document.getElementById('signUpFullName').value;
    var email = document.getElementById('signUpEmail').value;
    var password = document.getElementById('signUpPassword').value;

    if (fullName.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("All fields are required!");
        return false;
    }
    
    // Additional validation can be added here (e.g., email format, password strength)
    
    return true; // If everything is valid
}

function validateSignInForm() {
    var email = document.getElementById('signInEmail').value;
    var password = document.getElementById('signInPassword').value;

    if (email.trim() === "" || password.trim() === "") {
        alert("All fields are required!");
        return false;
    }

    // Additional validation can be added here (e.g., email format, password strength)
    
    return true; // If everything is valid
}

function validatefpForm() {
    var email = document.getElementById('fpmail').value;
    var newpassword = document.getElementById('fppassword').value;
    var confirmpassword = document.getElementById('fpconfirm').value;

    if (email.trim() === "" || newpassword.trim() === "" || confirmpassword.trim() === "") {
        alert("All fields are required!");
        return false;
    }

    if (newpassword !== confirmpassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Additional validation can be added here (e.g., email format)
    
    return true; // If everything is valid
}
