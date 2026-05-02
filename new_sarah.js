// Sarah's Tribute Page Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Smooth scrolling
    setupSmoothScroll();
    
    // Observations list for hover effects
    setupObservations();
});

// Theme Toggle
function initTheme() {
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Intersection Observer for scroll animations
function setupObservations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.wish-card, .quote-card, .gallery-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Random quote on page load
function displayRandomQuote() {
    const quotes = [
        "You are capable of incredible things.",
        "Great things never come from comfort zones.",
        "Your dreams are worth fighting for.",
        "Success is no accident. It's hard work, perseverance, and learning.",
        "Believe in yourself and you're halfway there.",
        "The only way to do great work is to love what you do."
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log("Today's thought: " + randomQuote);
}

// Particle effect wrapper (optional enhancement)
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = '#ff1493';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.pointerEvents = 'none';
    confetti.style.borderRadius = '50%';
    confetti.style.opacity = '0.7';
    document.body.appendChild(confetti);

    let top = 0;
    const interval = setInterval(() => {
        top += Math.random() * 5 + 3;
        confetti.style.top = top + 'px';
        confetti.style.opacity = 1 - (top / window.innerHeight);

        if (top > window.innerHeight) {
            clearInterval(interval);
            confetti.remove();
        }
    }, 20);
}

// Call on page load
document.addEventListener('DOMContentLoaded', function() {
    displayRandomQuote();
    
    // Optional: Create celebratory confetti on page load
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createConfetti(), i * 100);
    }
});
