export default class Tax {
    static calculate(list_price, tax_rate) {
        const tax_amount = (list_price * tax_rate) / 100;
        return list_price + tax_amount;
    } 
    static deductTax(total_price, tax_rate) {
        const list_price = total_price / (1 + tax_rate / 100);
        return list_price;
    }
    static figureTaxRate(list_price, total_price) {
        const tax_amount = total_price - list_price;
        const tax_rate = (tax_amount / list_price) * 100;
        return tax_rate;
    }
}
