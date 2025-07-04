 function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }
        
        // Change icon-hamburger to icon-close when the menu is active
/*************  ✨ Windsurf Command 🌟  *************/
        document.querySelector('.mobile-menu-toggle').addEventListener('click', () => {
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            menuToggle.classList.toggle('active');
            const icon = menuToggle.querySelector('img');
            const hamburgerIcon = 'images/icon-hamburger.svg';
            const closeIcon = 'images/icon-close.svg';
            if (menuToggle.classList.contains('active')) {
                icon.src = 'images/icon-close.svg'; // Change to close icon
            } else {
                icon.src = 'images/icon-hamburger.svg'; // Change back to hamburger icon
            }
            
            menuToggle.classList.toggle('active');
            icon.src = menuToggle.classList.contains('active') ? closeIcon : hamburgerIcon;
        });
/*******  c5e48916-8a2b-4164-b2d4-172c30d84f35  *******/
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                const mobileMenu = document.getElementById('mobileMenu');
                const menuToggle = document.querySelector('.mobile-menu-toggle');
                
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

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

