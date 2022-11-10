"use strict";
class Statue {
    constructor(height) {
        this.height = height;
    }
    get getHeight() { return this.height; }
    set setHeight(height) { this.height = height; }
    get title() { return this.title; }
    set title(title) { this.title = title; }
    get price() { return this.price; }
    set price(price) { this.price = price; }
    get year() { return this.year; }
    set year(year) { this.year = year; }
}
let newStatue;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let nameRegex = /^[aA-zZ]{1,}/;
    let yearRegex = /[0-9]{4,4}/;
    let priceRegex = /[0-9]{1,}/;
    let checkName = true;
    let checkYear = true;
    let checkPrice = true;
    let checkHeight = true;
    let inpTitle = document.getElementById('name');
    let inpPrice = document.getElementById('price');
    let inpHeight = document.getElementById('height');
    let inpYear = document.getElementById('year');
    (_a = document.getElementById('sub')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        console.log(inpTitle.value);
        if (!nameRegex.test(inpTitle.value)) {
            inpTitle.style.backgroundColor = "red";
            inpTitle.placeholder = "Hibas adat!";
            checkName = false;
        }
        else {
            inpTitle.style.backgroundColor = "white";
            inpTitle.placeholder = "A mu cime:";
            checkName = true;
        }
        if (!yearRegex.test(inpYear.value) || inpYear.value > "2022") {
            inpYear.style.backgroundColor = "red";
            inpYear.placeholder = "Hibas adat!";
            checkYear = false;
        }
        else {
            inpYear.style.backgroundColor = "white";
            inpYear.placeholder = "Evjarat";
            checkYear = true;
        }
        if (!priceRegex.test(inpPrice.value) || inpPrice.value < "1") {
            inpPrice.style.backgroundColor = "red";
            inpPrice.placeholder = "Hibas adat!";
            checkPrice = false;
        }
        else {
            inpPrice.style.backgroundColor = "white";
            inpPrice.placeholder = "Ar (FT)";
            checkPrice = true;
        }
        if (!priceRegex.test(inpHeight.value) || inpHeight.value < "20") {
            inpHeight.style.backgroundColor = "red";
            inpHeight.placeholder = "Hibas adat!";
            checkHeight = false;
        }
        else {
            inpHeight.style.backgroundColor = "white";
            inpHeight.placeholder = "Magassag";
            checkHeight = true;
        }
        if (checkHeight == true && checkPrice == true && checkYear == true && checkName == true) {
        }
    });
});
