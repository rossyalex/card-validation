const validator = {

  isValid: (creditCard) => {
    let creditArray = creditCard.split('').map(x => +x);
    creditArray = validator.multiplyTwo(creditArray);
    return validator.sumLuhn(creditArray);
  },

  multiplyTwo: (creditArray) => {
    return creditArray.map((item, i) => {
      if (i % 2 === 0) {
        let value = item * 2;
        if (value > 9) {
          let sum = 0;
          while (value) {
            sum = sum + value % 10;
            value = Math.floor(value / 10);
          }
          return sum;
        }
        return value;
      }
      return item;
    })
  },

  sumLuhn: (creditArray) => {
    let total = 0;
    for (const number of creditArray) {
      total = total + number;
    }
    return total % 10 === 0;
  },


  maskify: (creditCard) => {
    return creditCard.replace(/.(?=.{4})/g, "#");
  },

};

export default validator;
