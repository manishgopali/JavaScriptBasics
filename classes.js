//class = (ES6 feature) provides a more structured and cleaner 
//way to work with comapred to traditional constructor functions
//ex. static keyword,encapsulation,inheritance


class Product{
    constructor(name,price) {
        this.name = name;
        this.price = price;
        
    }
    
    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : $${this.price.toFixed(2)}`);
    }

    calcutateTotal(salesTax){
        return this.price + (this.price* salesTax);
    }
}
const salesTax = 0.07;

const product1 = new Product("Shirt",18.99);
const product2 = new Product("Pants",22.50);
const product3 = new Product("Underwear",99.99);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product3.calcutateTotal(salesTax);
console.log(`The total price (with tax) : $${total.toFixed(2)}`);