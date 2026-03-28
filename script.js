document.addEventListener("DOMContentLoaded", () => {
    const postcardImg = document.getElementById('postcard');
    const startBtn = document.getElementById('startBtn');
    const music = document.getElementById('bgMusic');
    const body = document.body; // Получаем доступ к фону
    
    const totalImages = 20;
    let currentIndex = 1;

    // Функция смены картинок (каждые 4 удара / 2 секунды)
    function changeImage() {
        currentIndex = (currentIndex % totalImages) + 1;
        postcardImg.src = `images/img${currentIndex}.jpg`;
    }

    // Функция для создания вспышки фонового цвета
    function discoFlash() {
        // Список ярких клубных цветов
        const colors = [
            'radial-gradient(circle, #401010 0%, #000 100%)', // Красный оттенок
            'radial-gradient(circle, #104010 0%, #000 100%)', // Зеленый
            'radial-gradient(circle, #101040 0%, #000 100%)', // Синий
            'radial-gradient(circle, #404010 0%, #000 100%)'  // Золотой
        ];
        // Выбираем случайный цвет
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Применяем вспышку
        body.style.background = randomColor;
        
        // Через 100мс возвращаем базовый цвет (который меняется анимацией)
        setTimeout(() => {
            body.style.background = ''; // Убираем инлайновый стиль, возвращаем CSS анимацию
        }, 150);
    }

    startBtn.addEventListener('click', () => {
        music.play().catch(error => console.log("Ошибка воспроизведения:", error));
        
        // 1. Активируем анимацию фона на BODY
        body.classList.add('disco-active');
        
        // 2. Активируем пульсацию картинки
        postcardImg.classList.add('active-pulse');
        
        startBtn.style.display = 'none'; // Прячем кнопку

        // Запускаем цикл смены картинок (в ритме)
        setInterval(changeImage, 2000); 
        
        // Запускаем цикл фоновых вспышек (каждый удар / 0.5с)
        setInterval(discoFlash, 500);
    });
});