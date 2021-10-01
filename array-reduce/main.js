const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumNum = (previous, current) => {
  return previous + current;
};

const sum = numbers.reduce(sumNum);
console.log('sum :', sum);

const productNum = (previous, current) => {
  return previous * current;
};

const product = numbers.reduce(productNum);
console.log('product :', product);

const transaction = (previous, current) => {

  if (current.type === 'deposit') {
    return previous + current.amount;
  }
  if (current.type === 'withdrawal') {
    return previous - current.amount;
  }
};

const balance = account.reduce(transaction, 0);
console.log('balance: ', balance);

const compositeTraits = (previous, current) => {

  Object.assign(previous, current);
  return previous;
};

const composite = traits.reduce(compositeTraits, {});
console.log('composite :', composite);
console.log('traits :', traits);
