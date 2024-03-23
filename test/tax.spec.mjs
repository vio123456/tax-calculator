import { describe } from 'mocha';
import { expect } from 'chai';
import Tax from '../src/tax.mjs';

describe('Tax test suite', () => {
    it.skip('Can calculate price after tax', () => {
        const tax = 24;
        const list_price = 1;
        const expected_price_after_tax = 1.24;
        expect(Tax.applyTax(list_price, tax)).to.equal(expected_price_after_tax);
    });
    it('Can calculate price before tax', () => {
        const tax = 24;
        const total_price = 1.24;
        const expected_price_before_tax = 1;
        expect(Tax.deductTax(total_price, tax)).to.equal(expected_price_before_tax);
    });
    it('Can solve tax rate', () => {
        const list_price = 1;
        const total_price = 1.24;
        const expected_tax_rate = 24;
        expect(Tax.figureTaxRate(list_price, total_price)).to.equal(expected_tax_rate);
    });
});
