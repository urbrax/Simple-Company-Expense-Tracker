"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var project_name = /*any*/ '===Company Expense Tracker===';
console.log(project_name.toUpperCase());
/*project_name = "42";*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.id = ++Person.id_counter;
        this.name = name;
    }
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.toString = function () {
        return this.name + " (ID: " + this.id + ")";
    };
    Person.id_counter = 0;
    return Person;
}());
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, salary) {
        var _this = _super.call(this, name) || this;
        _this.salary = salary;
        _this.salaryEarned = 0;
        return _this;
    }
    Staff.prototype.receiveSalary = function () {
        this.salaryEarned += this.salary;
    };
    Staff.prototype.getSalaryEarned = function () {
        return this.salaryEarned;
    };
    Staff.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ", received a total of " + this.getSalaryEarned();
    };
    return Staff;
}(Person));
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(name, totalToPay, company) {
        var _this = _super.call(this, name) || this;
        _this.paid = 0;
        _this.company = null;
        _this.totalToPay = totalToPay;
        if (company) {
            _this.company = company;
        }
        return _this;
    }
    Client.prototype.pay = function (amount) {
        this.paid += amount;
    };
    Client.prototype.getPaid = function () {
        return this.paid;
    };
    Client.prototype.getRemainingToPay = function () {
        return this.totalToPay - this.paid;
    };
    Client.prototype.toString = function () {
        return "" + _super.prototype.toString.call(this) + (this.company ? ' from company ' + this.company : '') + " has " + this.getRemainingToPay() + " left to pay";
    };
    return Client;
}(Person));
var Company = /** @class */ (function () {
    function Company(name, staffList, clientsList) {
        this.name = name;
        this.staffList = staffList;
        this.clientsList = clientsList;
    }
    Company.prototype.getTotalSpent = function () {
        return this.staffList.map(function (staff) { return staff.getSalaryEarned(); }).reduce(function (sum, current) { return sum + current; }, 0);
    };
    Company.prototype.getTotalEarned = function () {
        return this.clientsList.map(function (client) { return client.getPaid(); }).reduce(function (sum, current) { return sum + current; }, 0);
    };
    Company.prototype.toString = function () {
        return "Company " + this.name + ", Earned: " + this.getTotalEarned() + ", Spent: " + this.getTotalSpent();
    };
    return Company;
}());
var jane = new Staff('Jane', 300);
jane.receiveSalary();
console.log(jane.toString());
var joe = new Staff('Joe', 500);
joe.receiveSalary();
console.log(joe.toString());
// console.log(`Joe's ID: ${joe.getId()}`);
var john = new Staff('John', 300);
john.receiveSalary();
console.log(john.toString());
var josephine = new Staff('Josephine', 500);
josephine.receiveSalary();
console.log(josephine.toString());
var joseph = new Client('Joseph', 5000);
var maria = new Client('Maria', 4000, 'ACME');
joseph.pay(2000);
maria.pay(2000);
console.log(joseph.toString());
console.log(maria.toString());
var mycompany = new Company('My Company', [jane, joe, john, josephine], [joseph, maria]);
console.log(mycompany.toString());
