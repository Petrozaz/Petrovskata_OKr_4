# Petrovskata_OKr_4
Вариант 4
Задание 1
Какой параметр  в  Object.defineProperty отвечает за возможность изменения значения свойства обьекта
Ответ:C) writable

Задвние 2
Напишите скрипт на JavaScript, который выводит в консоль сумму всех чисел от 1 до 50 включительно
Ответ: 
sum=0;
for(i=1;i<51;i++){
    console.log(sum=sum+i);
}

Задание 3
Напишите функцию на JavaScript,которая принимает объект с клбчами-странами и значениями-массивами городов,и возвращает массив всех городов одной строкой через запятую.Результат выведите с помощью console.log()
Ответ:
function getAllCities(countries) {
  
  const allCities = Object.values(countries)
    .flat()
     null, undefined
    .filter(city => city && city.trim() !== '')
    
    .filter((city, index, array) => array.indexOf(city) === index);
  
  return allCities.join(', ');
}
const countriesWithIssues = {
  'Россия': ['Москва', 'Санкт-Петербург', 'Москва', ''], // есть дубликат и пустая строка
  'США': ['Нью-Йорк', 'Лос-Анджелес', null],
  'Франция': ['Париж', 'Лион']
};

console.log(getAllCities(countriesWithIssues));
