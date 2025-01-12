document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation script
const animationImage = document.getElementById('animation-image');
const totalFrames = 61; // Количество кадров (0-60)
let currentFrame = 0;

// Предзагрузка изображений
const images = [];
for (let i = 0; i < totalFrames; i++) {
    const img = new Image();
    img.src = `images/intro/intro${i.toString().padStart(4, '0')}.png`;
    images.push(img);
}

function updateFrame() {
    currentFrame = (currentFrame + 1) % totalFrames;
    animationImage.src = images[currentFrame].src;
}

// Запуск анимации после загрузки всех изображений
Promise.all(images.map(img => new Promise(resolve => img.onload = resolve)))
    .then(() => setInterval(updateFrame, 50)); // Интервал между кадрами (в миллисекундах)


    document.addEventListener('DOMContentLoaded', function() {
        const heroImage = document.getElementById('hero-image');
        const totalFrames = 70; // Количество изображений в секвенции
        const imagePrefix = 'images/splash/splash_';
        const imageSuffix = '.png';
        const images = [];
        let currentFrame = 0;
    
        // Предзагрузка изображений
        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            img.src = `${imagePrefix}${i.toString().padStart(4, '0')}${imageSuffix}`;
            images.push(img);
        }
    
        function updateFrame() {
            currentFrame = (currentFrame + 1) % totalFrames;
            heroImage.src = images[currentFrame].src;
        }
    
        // Запуск анимации после загрузки всех изображений
        Promise.all(images.map(img => new Promise(resolve => img.onload = resolve)))
            .then(() => setInterval(updateFrame, 50)); // Интервал между кадрами (в миллисекундах)
    });
    
   
     // Показать загрузку до полной загрузки страницы
     window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        const loaderBackground = document.getElementById('loader-background');
        loader.style.display = 'none';
        loaderBackground.style.display = 'none';
    });
    
    
