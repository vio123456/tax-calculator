// Assuming Tax class is corrected as suggested
import Tax from './tax.mjs';

const CONF = {
    INITIAL_PRICE: 1,
    TAX_RATE: 24,
}

const DOM = {
    LIST_PRICE: document.getElementById('list-price'),
    TAX_RATE: document.getElementById('tax-rate'),
    TOTAL_PRICE: document.getElementById('total-price')
}

const state = {
    calc_based_on: ['list-price', 'tax-rate']
}

const changeValue = (field_name) => {
    if (!state.calc_based_on.includes(field_name)) {
        state.calc_based_on.unshift(field_name);
        state.calc_based_on.pop();
    }

    if (state.calc_based_on.includes('list-price') && state.calc_based_on.includes('tax-rate')) {
        const list_price = parseFloat(DOM.LIST_PRICE.value) || 0;
        const tax_rate = parseFloat(DOM.TAX_RATE.value) || 0;
        DOM.TOTAL_PRICE.value = Tax.calculate(list_price, tax_rate).toFixed(2);
    } else if (state.calc_based_on.includes('tax-rate') && state.calc_based_on.includes('total-price')) {
        const tax_rate = parseFloat(DOM.TAX_RATE.value) || 0;
        const total_price = parseFloat(DOM.TOTAL_PRICE.value) || 0;
        DOM.LIST_PRICE.value = Tax.deductTax(total_price, tax_rate).toFixed(2);
    } else { // Calculation based on 'total-price' and 'list-price'
        const total_price = parseFloat(DOM.TOTAL_PRICE.value) || 0;
        const list_price = parseFloat(DOM.LIST_PRICE.value) || 0;
        DOM.TAX_RATE.value = Tax.figureTaxRate(list_price, total_price).toFixed(2);
    }
}

const setup = () => {
    DOM.LIST_PRICE.value = CONF.INITIAL_PRICE;
    DOM.TAX_RATE.value = CONF.TAX_RATE;

    DOM.LIST_PRICE.addEventListener('change', () => changeValue('list-price'));
    DOM.TAX_RATE.addEventListener('change', () => changeValue('tax-rate'));
    DOM.TOTAL_PRICE.addEventListener('change', () => changeValue('total-price'));

    // Initialize with default values
    changeValue('list-price');
}

document.addEventListener('DOMContentLoaded', setup);
