import Client from './Client.js';

const client = new Client('Pedrito');

client.tax.annualGrossAmount = 100000;
client.tax.deductions = 5000;

const taxAmount = client.calculateTax();

console.log(`The tax for ${client.name} is ${taxAmount}`);
