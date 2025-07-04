 function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }
        

        // Mobile Menu Icon Turns Into Close Icon. icon-hamburger.svg to icon-close.svg
        document.querySelector('.mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
        // Close mobile menu when clicking outside of it
        document.addEventListener('click', function (event) {
            const mobileMenu = document.getElementById('mobileMenu');

        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });   

        // Add parallax effect to hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBackground = document.querySelector('.hero::before');
            if (heroBackground) {
                const speed = scrolled * 0.5;
                heroBackground.style.transform = `rotate(15deg) translateY(${speed}px)`;
            }
        });

