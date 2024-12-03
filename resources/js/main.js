// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const reason = document.getElementById('reason');

    let valid = true;

    // Validate full name
    if (fullName.value.trim() === '') {
        alert('Full Name is required');
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        alert('Please enter a valid email address');
        valid = false;
    }

    // Validate reason for contacting
    if (reason.value.trim() === '') {
        alert('Reason for contacting is required');
        valid = false;
    }

    // Submit form if all fields are valid
    if (valid) {
        alert('Form submitted successfully!');
        contactForm.submit();
    }
});

// Scroll Smoothly to Sections
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Add "Coming Soon" Hover Animation to Projects
const comingSoonElements = document.querySelectorAll('.coming-soon');

comingSoonElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.animation = 'fadeIn 1s ease-in-out infinite alternate';
    });
    element.addEventListener('mouseout', () => {
        element.style.animation = 'none';
    });
});

// Add CSS for Animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);