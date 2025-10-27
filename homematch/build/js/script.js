/* Sticky Header on Scroll */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.hero-slider', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 800,
    });
  });

/* Cookie Bar */
const cookieBar = document.createElement('div');
cookieBar.className = 'cookie-bar';
cookieBar.innerHTML = `
    <p>Цей сайт використовує cookies для покращення вашого досвіду. <a href="#">Дізнатися більше</a></p>
    <button class="cookie-close">Прийняти</button>
`;
document.body.appendChild(cookieBar);

const cookieClose = document.querySelector('.cookie-close');
if (getCookie('cookieAccepted') !== 'true') {
    cookieBar.style.display = 'block';
}
cookieClose.addEventListener('click', () => {
    setCookie('cookieAccepted', 'true', 365);
    cookieBar.style.display = 'none';
});

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

/* Go Top Button */
const goTopButton = document.createElement('button');
goTopButton.innerHTML = '↑';
goTopButton.className = 'go-top';
document.body.appendChild(goTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
});

goTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Mobile Menu Animation */
const burgerToggle = document.querySelector('.burger-menu-toggle');
const navItems = document.querySelector('.nav-items');
burgerToggle.addEventListener('change', () => {
    if (burgerToggle.checked) {
        navItems.style.display = 'flex';
        navItems.style.transform = 'translateX(0)';
    } else {
        navItems.style.transform = 'translateX(100%)';
        setTimeout(() => {
            navItems.style.display = 'none';
        }, 300);
    }
});

/* Elements Animation on Scroll */
const animateElements = document.querySelectorAll('.hero, .hunt-card, .about-content, .review-card, .order-section, .newsletter-section, .timer-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(el => observer.observe(el));

/* Modal Window with Form */
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="modal-close">×</span>
        <h2>Замовити книгу</h2>
        <form class="modal-form">
            <div class="form-group">
                <input type="text" placeholder="Введіть ваше ім’я" class="form-input" required>
            </div>
            <div class="form-group">
                <input type="email" placeholder="Введіть вашу ел. адресу" class="form-input" id="modal-email" required>
            </div>
            <button type="submit" class="submit-button">Відправити</button>
        </form>
    </div>
`;
document.body.appendChild(modal);

const ctaButtons = document.querySelectorAll('.cta-button, .submit-button');
const modalClose = modal.querySelector('.modal-close');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });
});
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

/* Form Email Validation */
const modalForm = document.querySelector('.modal-form');
const emailInput = document.querySelector('#modal-email');
modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Будь ласка, введіть коректну email адресу');
        return;
    }
    alert('Форма відправлена успішно!');
    modal.style.display = 'none';
    modalForm.reset();
});

/* Light/Dark Theme Toggler */
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌙';
themeToggle.className = 'theme-toggle';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '☀️';
        document.documentElement.style.setProperty('--primary-color', '#b0120a');
        document.documentElement.style.setProperty('--secondary-color', '#000000');
        document.documentElement.style.setProperty('--background-color', '#f0f0f0');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--dark-text', '#ffffff');
    } else {
        themeToggle.innerHTML = '🌙';
        document.documentElement.style.setProperty('--primary-color', '#900f08');
        document.documentElement.style.setProperty('--secondary-color', '#ffffff');
        document.documentElement.style.setProperty('--background-color', '#020609');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--dark-text', '#000000');
    }
});

/* Countdown Timer */
function startCountdown() {
    const endDate = new Date('2025-12-31T23:59:59').getTime();
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'Акція завершена!';
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('countdown').innerHTML = `${days}д ${hours}г ${minutes}хв ${seconds}с`;
    }, 1000);
}
startCountdown();