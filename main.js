// --NAVBAR RESPONSIVE--
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
    const closeButton = document.querySelector('.close-button');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    });
});





// --NAVBAR SCROLL--
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

// Controlar la visibilidad de la barra de navegación durante el scroll
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Al bajar, esfuma la barra
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateY(0px)';
    } else {
        // Al subir, muestra la barra
        navbar.style.opacity = '1';
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Asegurar que la barra de navegación esté visible al cargar la página
window.addEventListener('load', function() {
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
});











// --ESTADISTICAS Y NUMEROS--
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stat-number');

    const countUp = (element, endValue, duration) => {
        let startValue = 0;
        const stepTime = Math.abs(Math.floor(duration / endValue));
        const increment = endValue / (duration / stepTime); // Incremento más alto para velocidad rápida
        const interval = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
                element.textContent = `+${endValue}`;
                clearInterval(interval);
            } else {
                element.textContent = `+${Math.floor(startValue)}`;
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statsSection.classList.add('visible');
                statNumbers.forEach(stat => {
                    const endValue = parseInt(stat.getAttribute('data-count'));
                    countUp(stat, endValue, 4000); // 3 segundos en total
                });
                observer.unobserve(statsSection);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
});