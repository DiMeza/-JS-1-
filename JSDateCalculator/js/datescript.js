document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdayInput = document.getElementById('birthday');
    const birthDate = new Date(birthdayInput.value);
    const currentDate = new Date();

    // Проверка корректности введённой даты
    if (!isValidDate(birthDate)) {
        alert('Пожалуйста, выберите правильную дату.');
        return;
    }

    // Вычисление разницы между двумя датами
    const diffInTime = currentDate.getTime() - birthDate.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    // Разбиение на годы, месяцы и дни
    const years = Math.floor(diffInDays / 365);
    const months = Math.floor((diffInDays % 365) / 30);
    const days = diffInDays % 365 % 30;

    // Отображение результата
    document.getElementById('ageResult').innerText = `Ваш возраст: ${years} лет, ${months} месяцев и ${days} дней.`;
});

// Функция проверки валидности даты
function isValidDate(date) {
    return Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}