const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubledNum = number => {
  return number * 2;
};

const doubled = numbers.map(doubledNum);
console.log(doubled);

const pricesNum = number => {
  return Number.parseFloat(number).toFixed(2);
};
const prices = numbers.map(pricesNum);
console.log(prices);

const upperCasedLang = lang => {
  return lang.toUpperCase();
};

const upperCased = languages.map(upperCasedLang);
console.log(upperCased);

const firstLettersLang = lang => {
  return lang[0];
};

const firstLetters = languages.map(firstLettersLang);
console.log(firstLetters);
