function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Carousel Functionality
        let currentSlide = 0;
        const track = document.getElementById('carouselTrack');
        const slides = track.children;
        const totalSlides = slides.length;
        const indicatorsContainer = document.getElementById('indicators');

        // Create indicators
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            indicator.onclick = () => goToSlide(i);
            indicatorsContainer.appendChild(indicator);
        }

        function updateCarousel() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update indicators
            const indicators = indicatorsContainer.children;
            for (let i = 0; i < indicators.length; i++) {
                indicators[i].classList.remove('active');
            }
            indicators[currentSlide].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function previousSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        // Auto-advance carousel every 5 seconds
        setInterval(nextSlide, 10000);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.getElementById('navLinks').classList.remove('active');
                }
            });
        });
        


// Animação de fade-in ao rolar
const fadeInSections = document.querySelectorAll(".fade-in-section");

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // A seção se torna visível quando 10% dela está na viewport
});

fadeInSections.forEach(section => {
    fadeInObserver.observe(section);
});

