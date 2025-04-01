// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.homeImg');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // Function to show a specific slide
    function showSlide(index) {
      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      
      // Remove active class from all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Show the selected slide and dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      
      currentSlide = index;
    }
    
    // Initialize carousel
    showSlide(0);
    
    // Add click event listeners to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });
    
    // Auto-advance the carousel every 5 seconds
    setInterval(() => {
      let nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    }, 5000);
    
    // Handle search functionality
    const searchInput = document.querySelector('.search');
    
    searchInput.addEventListener('focus', function() {
      this.parentElement.style.boxShadow = '0 0 5px rgba(255, 62, 108, 0.3)';
    });
    
    searchInput.addEventListener('blur', function() {
      this.parentElement.style.boxShadow = 'none';
    });
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      });
      
      // Add click event to product cards
      card.addEventListener('click', function() {
        // This would typically navigate to a product detail page
        console.log('Product clicked:', this.querySelector('h3').textContent);
      });
    });
    
    // Mobile menu functionality
    const logoElement = document.querySelector('.logo');
    const navMenu = document.querySelector('.nav-menu');
    
    // For mobile devices, add functionality to toggle the menu
    if (window.innerWidth <= 768) {
      logoElement.addEventListener('click', function(e) {
        if (navMenu.style.display === 'flex') {
          navMenu.style.display = 'none';
        } else {
          navMenu.style.display = 'flex';
          navMenu.style.flexDirection = 'column';
          navMenu.style.position = 'absolute';
          navMenu.style.top = '80px';
          navMenu.style.left = '0';
          navMenu.style.width = '100%';
          navMenu.style.backgroundColor = 'white';
          navMenu.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.05)';
          navMenu.style.zIndex = '99';
        }
        e.preventDefault();
      });
    }
    
    // Add to wishlist functionality
    const wishlistButton = document.querySelector('.wishlist');
    
    wishlistButton.addEventListener('click', function() {
      // Simple animation to indicate adding to wishlist
      this.classList.add('active');
      this.querySelector('i').style.color = '#ff3e6c';
      
      setTimeout(() => {
        this.querySelector('i').style.color = '';
        this.classList.remove('active');
      }, 1000);
      
      // This would typically trigger an API call or local storage update
      console.log('Item added to wishlist');
    });
    
    // Shopping bag functionality
    const bagButton = document.querySelector('.bag');
    
    bagButton.addEventListener('click', function() {
      // Simple animation
      this.classList.add('active');
      
      setTimeout(() => {
        this.classList.remove('active');
      }, 300);
      
      // This would typically navigate to the shopping bag page
      console.log('Navigating to shopping bag');
    });
    
    // Profile menu
    const profileButton = document.querySelector('.profile');
    
    profileButton.addEventListener('click', function() {
      // This would typically show a dropdown menu or navigate to profile page
      console.log('Profile menu clicked');
    });
    
    // Category item click events
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
      item.addEventListener('click', function() {
        const categoryName = this.querySelector('p').textContent;
        // This would typically filter products or navigate to category page
        console.log('Category clicked:', categoryName);
      });
    });
    
    // Window resize event to handle responsive design
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'row';
        navMenu.style.position = 'relative';
        navMenu.style.top = 'auto';
        navMenu.style.boxShadow = 'none';
      } else {
        navMenu.style.display = 'none';
      }
    });
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
      const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
            }
            
            observer.unobserve(img);
          }
        });
      });
      
      // Apply to all images that have data-src attribute
      document.querySelectorAll('img[data-src]').forEach(img => {
        imgObserver.observe(img);
      });
    }
  });