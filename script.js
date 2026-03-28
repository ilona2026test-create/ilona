document.addEventListener("DOMContentLoaded", () => {
    const postcardImg = document.getElementById('postcard');
    const glowLayer = document.getElementById('glowLayer'); // Слой со свечением
    const startBtn = document.getElementById('startBtn');
    const music = document.getElementById('bgMusic');
    
    const totalImages = 13;
    let currentIndex = 1;

    // Функция смены картинок (энергичная — раз в 2 секунды)
    function changeImage() {
        currentIndex = (currentIndex % totalImages) + 1;
        // Мы меняем src напрямую, без плавного затухания, чтобы сохранить ритм
        postcardImg.src = `images/img${currentIndex}.jpg`;
    }

    startBtn.addEventListener('click', () => {
        music.play().catch(error => console.log("Ошибка воспроизведения:", error));
        
        // Запускаем пульсацию со свечением на контейнере
        glowLayer.classList.add('active-pulse');
        
        startBtn.style.display = 'none'; // Прячем кнопку

        // Смена картинок в ритме
        setInterval(changeImage, 2000); 
    });
});