// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.slider-dot');
let currentTestimonial = 0;
let testimonialInterval;

function initTestimonialSlider() {
    if (testimonials.length === 0) return;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        currentTestimonial = index;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            showTestimonial(index);
            resetTestimonialInterval();
        });
    });

    // Auto-advance testimonials
    function startTestimonialInterval() {
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    function resetTestimonialInterval() {
        clearInterval(testimonialInterval);
        startTestimonialInterval();
    }

    startTestimonialInterval();
}

// Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Job Application Form
const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('applicantName').value;
        const email = document.getElementById('applicantEmail').value;
        const position = document.getElementById('position').value;
        
        if (!name || !email || !position) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your application! We will review it and get back to you soon.');
        applicationForm.reset();
    });
}

// Hero Carousel
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const heroSection = document.querySelector('.hero');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let carouselInterval;
    const slideInterval = 5000; // Auto-scroll every 5 seconds (5000 milliseconds)
    
    function updateDotAccessibility() {
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.setAttribute('aria-selected', 'true');
                dot.setAttribute('tabindex', '0');
            } else {
                dot.setAttribute('aria-selected', 'false');
                dot.setAttribute('tabindex', '-1');
            }
        });
    }
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentSlide = index;
        updateDotAccessibility();
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    function startCarousel() {
        // Clear any existing interval before starting a new one
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
        // Start auto-scrolling - changes slide every 5 seconds
        carouselInterval = setInterval(() => {
            nextSlide();
        }, slideInterval);
    }
    
    function stopCarousel() {
        clearInterval(carouselInterval);
    }
    
    function resetCarousel() {
        stopCarousel();
        startCarousel();
    }
    
    // Navigation buttons
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            resetCarousel();
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevSlide();
            resetCarousel();
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetCarousel();
            updateDotAccessibility();
        });
        
        dot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showSlide(index);
                resetCarousel();
                updateDotAccessibility();
            }
        });
    });
    
    
    // Pause on hover
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopCarousel);
        heroSection.addEventListener('mouseleave', startCarousel);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (heroSection && heroSection.contains(document.activeElement) || document.activeElement === document.body) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetCarousel();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetCarousel();
            }
        }
    });
    
    // Initialize accessibility
    updateDotAccessibility();
    
    // Start auto-scrolling
    startCarousel();
}

// Dark Mode Toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeIcon = darkModeToggle?.querySelector('.theme-icon');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.textContent = '☀️';
        }
    } else {
        html.removeAttribute('data-theme');
        if (themeIcon) {
            themeIcon.textContent = '🌙';
        }
    }
    
    // Toggle function
    function toggleDarkMode() {
        const currentTheme = html.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            // Switch to light mode
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            if (themeIcon) {
                themeIcon.textContent = '🌙';
            }
        } else {
            // Switch to dark mode
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (themeIcon) {
                themeIcon.textContent = '☀️';
            }
        }
    }
    
    // Add click event listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Listen for system theme changes (optional)
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Only apply system preference if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            mediaQuery.addEventListener('change', (e) => {
                if (e.matches) {
                    html.setAttribute('data-theme', 'dark');
                    if (themeIcon) {
                        themeIcon.textContent = '☀️';
                    }
                } else {
                    html.removeAttribute('data-theme');
                    if (themeIcon) {
                        themeIcon.textContent = '🌙';
                    }
                }
            });
        }
    }
}

// Update copyright year dynamically
function updateCopyrightYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode first to prevent flash of wrong theme
    initDarkMode();
    updateCopyrightYear();
    initHeroCarousel();
    initTestimonialSlider();
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});