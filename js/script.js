function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var interest = document.getElementById('interest').value;

    // Validasi nama
    if (name.trim() === '') {
        alert('Please enter your name');
        return false;
    }

    // Validasi email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Validasi pilihan minat
    if (interest === 'default') {
        alert('Please select your interest');
        return false;
    }

    // Formulir valid
    alert('Form submitted successfully!');
    return true;
}
