'use strict'

const calcButton  = document.getElementById('calcButton'),
      totalAmount = document.getElementById('totalAmount'),
      revenue     = document.getElementById('revenue');

const inputs = {
    startCapital: document.getElementById('startCapital'),
    interestRate: document.getElementById('interestRate'),
    investmentTerm: document.getElementById('investmentTerm'),
    additionalAttachments: document.getElementById('additionalAttachments'),
    additionalAttachmentsTerm: document.getElementById('additionalAttachmentsTerm'),
};

const config = {
    startCapital: 0,
    interestRate: 0,
    investmentTerm: 0,
    additionalAttachments: 0,
    additionalAttachmentsTerm: 12,
};

for (let input in inputs) {
    // Adding listeners for inputs
    inputs[input].addEventListener('input', changeConfig);
}

calcButton.addEventListener('click', evt => {

    evt.preventDefault();

    totalAmount.textContent = calculate() + ' ₽';
    revenue.textContent = calculate() - config['startCapital'] + ' ₽';

})

function changeConfig(evt) {
    config[evt.target.id] = Number(evt.target.value) || 0;
}

function calculate() {

    // Set start capital
    let total = config['startCapital'];

    // Calculate hard percents & Additional attachments
    for (let i=0;i<config['investmentTerm'];i++) {
        total += config['additionalAttachments'] * config['additionalAttachmentsTerm'];
        total *= config['interestRate']/100+1;
    }

    return  total.toFixed(2);

}