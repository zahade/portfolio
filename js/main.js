// ===================================
// PORTFOLIO - MAIN JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ===================================
  // MOBILE NAVIGATION TOGGLE
  // ===================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }
  
  // ===================================
  // ACTIVE NAVIGATION LINK
  // ===================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinksAll = document.querySelectorAll('.nav-links a');
  
  navLinksAll.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
  
// ===================================
// SCROLL ANIMATIONS - OPTIMIZED FOR MANY ELEMENTS
// ===================================
const observerOptions = {
    threshold: 0.05, // Lower threshold = earlier triggering
    rootMargin: '0px 0px -50px 0px'
};

// Single efficient observer with performance guards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Only animate if not already visible
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            // Use requestAnimationFrame for smooth rendering
            requestAnimationFrame(() => {
                entry.target.classList.add('visible');
            });
        }
    });
}, observerOptions);

// Get all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
console.log(`📊 Found ${fadeElements.length} elements to animate`); // Debug log

// Stagger observation to prevent browser overload
fadeElements.forEach((element, index) => {
    // Reset state
    element.classList.remove('visible');
    
    // Observe in batches with delay
    setTimeout(() => {
        observer.observe(element);
    }, Math.floor(index / 5) * 100); // Process in batches of 5
});
  
  // ===================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ===================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // ===================================
  // NAVBAR SCROLL EFFECT
  // ===================================
  let lastScroll = 0;
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      nav.style.boxShadow = 'none';
    } else {
      nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
  });
  
  // ===================================
  // DYNAMIC GEOMETRIC SHAPES
  // ===================================
  function createFloatingShapes() {
    const background = document.querySelector('.background-animation');
    if (!background) return;
    
    // Add particle effects
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(255, 0, 110, 0.4);
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: particleFloat ${15 + Math.random() * 15}s infinite ease-in-out;
        animation-delay: ${Math.random() * 5}s;
      `;
      background.appendChild(particle);
    }
  }
  
  // Add particle animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFloat {
      0%, 100% {
        transform: translate(0, 0);
        opacity: 0;
      }
      10% {
        opacity: 0.6;
      }
      90% {
        opacity: 0.6;
      }
      50% {
        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
      }
    }
  `;
  document.head.appendChild(style);
  
  createFloatingShapes();
  
  // ===================================
  // MOUSE PARALLAX EFFECT (SUBTLE)
  // ===================================
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  
  document.addEventListener('mousemove', function(e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  
  function animateParallax() {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;
    
    const shapes = document.querySelectorAll('.geometric-shape');
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 10;
      shape.style.transform = `translate(${currentX * speed}px, ${currentY * speed}px) rotate(${45 + index * 15}deg)`;
    });
    
    requestAnimationFrame(animateParallax);
  }
  
  animateParallax();
  
  // ===================================
  // TYPING EFFECT (for hero section)
  // ===================================
  function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }
  
  // Check if we're on the home page and apply typing effect
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle && heroSubtitle.dataset.typewriter) {
    const text = heroSubtitle.textContent;
    setTimeout(() => typeWriter(heroSubtitle, text, 50), 500);
  }
  
  // ===================================
  // COPY EMAIL TO CLIPBOARD
  // ===================================
  const emailLinks = document.querySelectorAll('.contact-item[href^="mailto:"]');
  
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const email = this.getAttribute('href').replace('mailto:', '');
      
      navigator.clipboard.writeText(email).then(() => {
        // Show tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Email copied!';
        tooltip.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(139, 0, 255, 0.9);
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          z-index: 10000;
          animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(tooltip);
        
        setTimeout(() => {
          tooltip.style.animation = 'slideOut 0.3s ease';
          setTimeout(() => tooltip.remove(), 300);
        }, 2000);
      });
    });
  });
  
  // Add animation styles
  const animStyle = document.createElement('style');
  animStyle.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
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
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(animStyle);
  
  // ===================================
  // PERFORMANCE OPTIMIZATIONS
  // ===================================
  
  // Lazy load images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
  
});
