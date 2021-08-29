import person from './person.js';
import {fullName} from "./book.js"
import {Book} from './book.js'


var book = new Book("THoi lao dao",322);
console.log(book.pageSize);

console.log(person)
console.log(fullName)

class Book2{
    #privatePro1 =0;// private property
    #privatePro2;
    constructor(bookName, pageSize,p1,p2){
        this.bookName = bookName;
        this.pageSize = pageSize;
        this.#privatePro1=p1;
        this.#privatePro2=p2;
    }
    #sayName2(){
        return this.bookName;
    }
    sayName(){
        console.log("Private: "+this.#sayName2())
        return this.bookName;
    }
}
var book2 = new Book2("Tieng goi noi hoang da",322);

console.log(book2.sayName());
//Destructuring
var arr = [1,2,3,4,5]
var obj ={
    fullName:"Van",
    addr:"Thainguyen",
    age: 21,
    gernder:'Male'
}
let a,b,c,r;
[a,b,c,...r]=arr;
console.log(a);
console.log(b);
console.log(c);
console.log(r);
//
const {fullName:b1,addr:c2,...r2} = obj;
console.log(b1);
console.log(c2);
console.log(r2);