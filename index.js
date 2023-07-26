calculator = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
      break;
    case '-':
      return x - y;
      break;
    case '*':
      return x * y;
      break;
    case '/':
      return x / y;
      break;
    default:
      return 'invalid operator';
  }
};

module.exports = calculator;
