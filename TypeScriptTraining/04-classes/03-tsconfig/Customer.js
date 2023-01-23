"use strict";
var Customer = /** @class */ (function () {
    function Customer(_firstName, _lastName) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "_firstName", {
        get: function () {
            return this.firstName;
        },
        set: function (value) {
            this.firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "_lastName", {
        get: function () {
            return this.lastName;
        },
        set: function (value) {
            this.lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myNewCustomer = new Customer("Madalin", "Ghergut");
console.log(myNewCustomer);
myNewCustomer._lastName = "Bianca12123";
myNewCustomer._firstName = "Bianca121233";
console.log(myNewCustomer);
