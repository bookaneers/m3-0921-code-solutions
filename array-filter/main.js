const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

// ---------- evenNumbers ----------
const isEven = number => {
  return number % 2 === 0;
};

const evenNumbers = numbers.filter(isEven);
console.log('evenNumbers :', evenNumbers);

// const evenNumbers = numbers.filter(number => number % 2 === 1);
// console.log(evenNumbers);

// ---------- overFive ----------

const isOverFive = number => {
  return number > 5;
};

const overFive = numbers.filter(isOverFive);
console.log('overFive :', overFive);

// const overFive = numbers.filter(number => number > 5);
// console.log(overFive);

// ---------- startWithE ----------
const startsWithE = name => {
  return name[0] === 'E';
};

const startWithE = names.filter(startsWithE);
console.log('startWithE : ', startWithE);

// const startWithE = names.filter(name => name.slice(0, 1) === 'E');
// console.log(startWithE);

// ---------- hasD ----------

const hasD = name => {
  return name.toLowerCase().includes('d');
};

const haveD = names.filter(hasD);
console.log(haveD);

// const haveD = names.filter(name => name.includes('D') || name.includes('d'));
// console.log(haveD);
