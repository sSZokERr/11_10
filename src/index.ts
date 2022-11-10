class Statue implements Artwork{
    height : number;

    constructor(height: number){
        this.height = height;
    }
    get title(): string {return this.title;}
    set title(title: string){this.title = title;}

    get price(): number {return this.price;}
    set price(price: number) {this.price = price;}

    get year() : number {return this.year;}
    set year(year : number) {this.year = year;}
}
let newStatue : Artwork[];

document.addEventListener('DOMContentLoaded', () => {
    let nameRegex = /^[aA-zZ]{1,}/;
    let yearRegex = /[0-9]{4,4}/;
    let priceRegex = /[0-9]{1,}/;
})
