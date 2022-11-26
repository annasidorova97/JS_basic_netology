while (true) {
    let numberToGuess = Math.floor(Math.random() * 1000);
    console.log('Загадано часло', numberToGuess);
    numberFromUser = null;
    counter = 0;

    while (+numberFromUser !== numberToGuess) {
        const numberFromUser = prompt('Введите число от 0 до 999');
        console.log('Пользователь ввел число', numberFromUser);
        counter++;

        if (numberFromUser === 'q') {
            alert('Игра завершена');
            break;
        }

        if (isNaN(numberFromUser) || (+numberFromUser < 0) || (+numberFromUser > 999)) {
            alert('Необходимо ввести число от 0 до 999');
        } else if (+numberFromUser === numberToGuess) {
            alert('Вы угали!');
            console.log('Число попыток', counter);
            break;
        } else if (+numberFromUser < numberToGuess) {
            alert('Больше');
        } else {
            alert('Меньше');
        }
    }
    break;
}


