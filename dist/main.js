"use strict";

var _Client = _interopRequireDefault(require("./Client.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var client = new _Client["default"]('Pedrito');
client.tax.annualGrossAmount = 100000;
client.tax.deductions = 5000;
var taxAmount = client.calculateTax();
console.log("The tax for ".concat(client.name, " is ").concat(taxAmount));