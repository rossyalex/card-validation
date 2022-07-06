const validator = {

  isValid: (creditCard) => {
    console.log("Esto es el isValid", creditCard)
  },

  /*
  * @param string creditCard
  * return string
  */
  maskify: (creditCard) => {
    return creditCard.replace(/.(?=.{4})/g, "#");
  },

};

export default validator;
