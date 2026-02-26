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
