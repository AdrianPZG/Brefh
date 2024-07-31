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





document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slider = document.querySelector('.slider');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function showSlide(n) {
        const slides = document.querySelectorAll('.slider-item');
        if (n >= slides.length) {
            index = 0;
        } else if (n < 0) {
            index = slides.length - 1;
        } else {
            index = n;
        }
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
        });
    });

    showSlide(index); // Show the first slide by default
});




/*MANDAR CORREO FORMULARIO CONTACTO*/
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var form = this;
    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            document.getElementById('responseMessage').innerText = 'Mensaje enviado con éxito.';
            form.reset();
        } else {
            document.getElementById('responseMessage').innerText = 'Error al enviar el mensaje. Inténtalo de nuevo más tarde.';
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = 'Error al enviar el mensaje. Inténtalo de nuevo más tarde.';
    });
});