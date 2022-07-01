import validator from './validator.js';

console.log(validator);

const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const quantity = document.getElementById('quantity');

//const buyBtn = document.getElementById('buy');
//const cardSecond = document.getElementById('cardSecond');

addition.addEventListener('click', addQuantity);
subtraction.addEventListener('click', subQuantity);

function addQuantity() {
    let quantityProduct = parseInt(quantity.textContent);
    quantityProduct++;
    quantity.innerText = quantityProduct;
    multiplyAmount(quantityProduct);
}

function subQuantity() {
    let quantityProduct = parseInt(quantity.textContent);
    if (quantityProduct === 1) {
        return;
    }
    quantityProduct--;
    quantity.innerText = quantityProduct;
    multiplyAmount(quantityProduct)
}

function multiplyAmount(quantity) {
    const amount = document.getElementById('amount');
    let amountValue = parseInt(amount.textContent);
    amount.innerText = quantity * amountValue;
}

/*buyBtn.addEventListener('click', buycomprar);

function buycomprar() {
    buyBtn.classList.add("cardSecond");
    cardQuestion.classList.remove('cardFirst');
    
}*/










