/**
 * Custom JavaScript for Tallahassee Lawn Services
 */
document.addEventListener("DOMContentLoaded", function() {
    // Add scroll event listener for navbar
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.background = '#ffffff';
        }
    });
    // Form validation for Contact forms
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});