import validator from './validator.js';

console.log(validator);

const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const quantity = document.getElementById('quantity');
const amount = document.getElementById('amount');
const buyBtn = document.getElementById('buy');
const backBtn = document.getElementById('back');
const finalizeBtn = document.getElementById('finalize');
const payBtn = document.getElementById('pay');
const cardFirst = document.getElementById('card1');
const cardSecond = document.getElementById('card2');
const purchaseAmount = document.getElementById('purchaseAmount');
const cardThird = document.getElementById('card3');
const cardQuarter = document.getElementById('card4');



addition.addEventListener('click', addQuantity);
subtraction.addEventListener('click', subQuantity);
buyBtn.addEventListener('click', buy);
backBtn.addEventListener('click', back);
finalizeBtn.addEventListener('click', finalize);
payBtn.addEventListener('click', pay);


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
    const priceProduct = 600;
    amount.innerText =  (quantity * priceProduct).toString();
}

function buy() {
    cardFirst.classList.add('hide');
    cardSecond.classList.remove('hide');
    purchaseAmount.innerText = amount.textContent 
}

function back() {
    cardSecond.classList.add('hide');
    cardFirst.classList.remove('hide');
}


function finalize() {
    cardSecond.classList.add('hide');
    cardThird.classList.remove('hide');

}

function pay() {
    cardThird.classList.add('hide');
    cardQuarter.classList.remove('hide');

}











