// ===== Sticky Navbar =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// ===== 3D Preloader =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.classList.remove('loading');
        document.body.style.overflow = 'visible';
    }, 2500);
});

// Add loading class to body initially
document.body.classList.add('loading');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const animateElements = document.querySelectorAll('.service-card, .pricing-card, .gallery-item, .testimonial-card, .about-content, .booking-content');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Form Validation and Submission =====
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!name) {
        showAlert('Please enter your name', 'error');
        return;
    }
    
    if (!phone || phone.length !== 10) {
        showAlert('Please enter a valid 10-digit phone number', 'error');
        return;
    }
    
    if (!email || !isValidEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    if (!date) {
        showAlert('Please select a date', 'error');
        return;
    }
    
    // Check if date is in the past
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showAlert('Please select a future date', 'error');
        return;
    }
    
    if (!service) {
        showAlert('Please select a service', 'error');
        return;
    }
    
    // Create WhatsApp message
    const serviceNames = {
        'bridal': 'Bridal Makeup',
        'party': 'Party Makeup',
        'hd': 'HD Makeup',
        'airbrush': 'Airbrush Makeup',
        'hair': 'Hair Styling',
        'prewedding': 'Pre-Wedding Makeup'
    };
    
    const whatsappMessage = `Hi Zoya Makeup Studio,\n\nI would like to book an appointment:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate: ${date}\nService: ${serviceNames[service]}\n${message ? `Message: ${message}` : ''}`;
    
    const whatsappURL = `https://wa.me/916001343840?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show success message
    showAlert('Redirecting to WhatsApp...', 'success');
    
    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
        bookingForm.reset();
    }, 1000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Alert function
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `custom-alert ${type}`;
    alert.textContent = message;
    
    // Add styles
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(alert);
    
    // Remove after 3 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Set minimum date for booking =====
const dateInput = document.getElementById('date');
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const minDate = tomorrow.toISOString().split('T')[0];
dateInput.setAttribute('min', minDate);

// ===== Gallery Image Click (Optional Enhancement) =====
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const modal = createImageModal(img.src);
        document.body.appendChild(modal);
    });
});

function createImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    `;
    
    modal.appendChild(img);
    
    modal.addEventListener('click', () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
    });
    
    return modal;
}

// Add fade animations for modal
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(modalStyle);

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add active link style
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(navStyle);

// ===== Preloader (Optional) =====
window.addEventListener('load', () => {
    document.body.style.overflow = 'visible';
});

// ===== 3D Card Tilt Effect =====
const cards = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
    });
});

// ===== 3D Parallax Effect on Hero =====
const hero = document.querySelector('.hero');

if (hero) {
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        
        hero.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
    });
}

// ===== 3D Floating Animation for Gallery Items =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    item.style.animation = `float3d ${3 + index * 0.2}s ease-in-out infinite`;
    item.style.animationDelay = `${index * 0.1}s`;
});

// Add floating animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float3d {
        0%, 100% {
            transform: translateY(0) translateZ(0);
        }
        50% {
            transform: translateY(-10px) translateZ(10px);
        }
    }
`;
document.head.appendChild(floatStyle);

// ===== 3D Button Press Effect =====
const buttons = document.querySelectorAll('.cta-button, .submit-button, .pricing-button');

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'translateY(-2px) translateZ(5px) scale(0.98)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = '';
    });
});

// ===== Smooth 3D Scroll Reveal =====
const reveal3D = () => {
    const reveals = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .gallery-item');
    
    reveals.forEach((element, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateZ(0) rotateX(0)';
        }
    });
};

window.addEventListener('scroll', reveal3D);

// ===== 3D Depth on Scroll =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.about-image, .booking-form-wrapper');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateZ(${yPos * 0.1}px)`;
    });
});

// ===== Console Message =====
console.log('%c✨ Zoya Makeup Studio ✨', 'color: #f8b4c1; font-size: 24px; font-weight: bold; font-family: Playfair Display, serif;');
console.log('%cEnhancing Your Natural Beauty', 'color: #e8a0ae; font-size: 14px; font-family: Poppins, sans-serif;');
console.log('%cWebsite designed with love 💕 | Now with stunning 3D effects!', 'color: #666; font-size: 12px;');
