class Statue implements Artwork{
    height : number;

    constructor(height: number){
        this.height = height;
    }
    get getHeight(): number {return this.height;}
    set setHeight(height: number) {this.height = height;}

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

    let checkName : boolean = true;
    let checkYear : boolean = true;
    let checkPrice : boolean = true;
    let checkHeight : boolean = true;

    let inpTitle = document.getElementById('name') as HTMLInputElement;
    let inpPrice = document.getElementById('price') as HTMLInputElement;
    let inpHeight = document.getElementById('height') as HTMLInputElement;
    let inpYear = document.getElementById('year') as HTMLInputElement;

    document.getElementById('sub')?.addEventListener("click", () => {
        console.log(inpTitle.value);
        if(!nameRegex.test(inpTitle.value)){
            inpTitle!.style.backgroundColor = "red";
            inpTitle!.placeholder = "Hibas adat!"
            checkName = false;
        }else {
            inpTitle!.style.backgroundColor = "white";
            inpTitle!.placeholder = "A mu cime:";
            checkName = true;
        }

        if(!yearRegex.test(inpYear.value) || inpYear.value !> "2022"){
            inpYear!.style.backgroundColor = "red";
            inpYear!.placeholder = "Hibas adat!"
            checkYear = false;
        }else {
            inpYear!.style.backgroundColor = "white";
            inpYear!.placeholder = "Evjarat";
            checkYear = true;
        }
        if(!priceRegex.test(inpPrice.value) || inpPrice.value !< "1"){
            inpPrice!.style.backgroundColor = "red";
            inpPrice!.placeholder = "Hibas adat!"
            checkPrice = false;
        }else {
            inpPrice!.style.backgroundColor = "white";
            inpPrice!.placeholder = "Ar (FT)";
            checkPrice = true;
        }
        if(!priceRegex.test(inpHeight.value) || inpHeight.value !< "20"){
            inpHeight!.style.backgroundColor = "red";
            inpHeight!.placeholder = "Hibas adat!"
            checkHeight = false;
        }else {
            inpHeight!.style.backgroundColor = "white";
            inpHeight!.placeholder = "Magassag";
            checkHeight = true;
        }
        if(checkHeight == true && checkPrice == true && checkYear == true && checkName == true){
            
        }



    })

})
