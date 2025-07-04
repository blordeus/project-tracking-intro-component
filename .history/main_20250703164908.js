 function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('active');
        }
        

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobileMenu').classList.remove('active');
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
        
        // Turn hamburger menu icon into close icon when active
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.addEventListener('transitionend', () => {
            if (mobileMenu.classList.contains('active')) {
                hamburgerIcon.src = 'images/icon-close.svg';
            } else {
                hamburgerIcon.src = './images/icon-hamburger.svg';
            }
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

