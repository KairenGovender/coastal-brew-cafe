document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================
       1. MOBILE NAVIGATION TOGGLE (Part 2 Fix)
       ========================================== */
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.navigation ul');
    
    // Create hamburger button dynamically
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰ Menu';
    menuToggle.classList.add('menu-toggle');
    navbar.insertBefore(menuToggle, navMenu);

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    /* ==========================================
       2. DYNAMIC DATE 
       ========================================== */
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        currentDateElement.textContent = formattedDate;
    }

    /* ==========================================
       3. FORM VALIDATION 
       ========================================== */
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
            
            // Remove existing error messages
            form.querySelectorAll('.error-msg').forEach(el => el.remove());

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    
                    // Create error message element
                    const errorMsg = document.createElement('span');
                    errorMsg.className = 'error-msg';
                    errorMsg.style.color = 'red';
                    errorMsg.style.fontSize = '0.8rem';
                    errorMsg.style.marginBottom = '10px';
                    errorMsg.textContent = 'This field is required.';
                    input.parentNode.insertBefore(errorMsg, input.nextSibling);
                } else {
                    input.style.borderColor = '#ccc';
                }
            });

            if (!isValid) {
                e.preventDefault(); // Stop form submission
            }
        });
    });
});

/* ==========================================
   4. LIGHTBOX GALLERY LOGIC 
   ========================================== */
let slideIndex = 1;

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    
    if (!slides.length) return; // Prevent errors on pages without a gallery

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    if(dots.length > 0) {
        dots[slideIndex-1].className += " active";
        if(captionText) captionText.innerHTML = dots[slideIndex-1].alt;
    }
}