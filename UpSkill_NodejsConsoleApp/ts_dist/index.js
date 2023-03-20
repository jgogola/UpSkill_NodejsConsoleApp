"use strict";
var _a;
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let nums = [1, 2, 3];
let user = [
    [1, 'Jason'],
    [2, 'Frank'],
    [3, 'Bob']
];
let userx = [
    [1, 'Jason'],
    [2, 'Frank'],
    [3, 'Bob']
];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
function calcTax(income, taxYear = 2023) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
calcTax(10000);
let employee = {
    id: 1,
    name: 'jason',
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 1,
    name: 'Jason',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 200;
function getCustomer(id) {
    return id === 0 ? null : { name: 'Jim' };
}
let customer = getCustomer(0);
if (customer != null && customer != undefined)
    console.log(customer.name);
let customer2 = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.name);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
