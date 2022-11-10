"use strict";
class Statue {
    constructor(height, title, year, price) {
        this.height = height;
        this.title = title;
        this.year = year;
        this.price = price;
    }
    get getHeight() { return this.height; }
    set setHeight(height) { this.height = height; }
    get getmTitle() { return this.title; }
    set setTitle(title) { this.title = title; }
    get getPrice() { return this.price; }
    set setPrice(price) { this.price = price; }
    get getYear() { return this.year; }
    set setYear(year) { this.year = year; }
}
let newStatue = [];
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
            newStatue.push(new Statue(parseInt(inpHeight.value), inpTitle.value, parseInt(inpPrice.value), parseInt(inpYear.value)));
            document.getElementById("counter").innerHTML = "Osszes mu: " + String(newStatue.length);
            let sumPrice = 0;
            for (let a = 0; a < newStatue.length; a++) {
                sumPrice += parseInt(inpPrice.value);
            }
            console.log(inpPrice.value);
            console.log(sumPrice);
            document.getElementById("sumPrice").innerHTML = "Ossz ertek: " + String(sumPrice) + "FT";
            inpHeight.value = "";
            inpTitle.value = "";
            inpPrice.value = "";
            inpYear.value = "";
        }
    });
});
