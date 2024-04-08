import Tax from './Tax.js';

class Client {
    constructor(name) {
        this.name = name;
        this.tax = new Tax();
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    calculateTax() {
        return (this.tax.annualGrossAmount - this.tax.deductions) * 0.21;
    }
};

export default Client;