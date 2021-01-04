let fname = prompt('Введите Ваше имя:');
let sname = prompt('Введите Вашу фамилию:');
let theatre = prompt('Введите название театра:');
let performance = prompt('Введите название представления:');

let sector = parseInt(prompt('Введите сектор:'));
let row = parseInt(prompt('Введите ряд:'));
let place = parseInt(prompt('Введите место:'));
let time = prompt('Введите время:');

console.log('Имя:' + " " + fname + " " + sname + '\n' + 'Театр:' + " " +  theatre + '\n' + 'Представление:' + " " +  performance + '\n' + 'Сектор:' + " " +  sector + '\n' + 'Ряд:' + " " +  row + '\n' + 'Место:' + " " +  place + '\n' + 'Время:' + " " +  time);

document.getElementById('name').innerHTML = sname + '&nbsp' + fname;
document.getElementById('theatre').innerHTML = theatre;
document.getElementById('title').innerHTML = performance;
document.getElementById('sector').innerHTML = sector;
document.getElementById('row').innerHTML = row;
document.getElementById('seat').innerHTML = place;
document.getElementById('seat2').innerHTML = place;
document.getElementById('time').innerHTML = time;



