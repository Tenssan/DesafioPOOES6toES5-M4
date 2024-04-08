class Tax {
    _annualGrossAmount;
    _deductions;

    constructor() {
        this._annualGrossAmount = 0;
        this._deductions = 0;    
    }

    get annualGrossAmount() {
        return this._annualGrossAmount;
    }

    set annualGrossAmount(new_annualGrossAmount) {
        this._annualGrossAmount = new_annualGrossAmount;
    }

    get deductions() {
        return this._deductions;
    }

    set deductions(new_deductions) {
        this._deductions = new_deductions;
    }
};

export default Tax;