console.log('hello we are learning object shorthand');
let brandName = 'Samsung';
let price = '20,000';
const withoutSH = {
    brandName : brandName,
    price : price
}
console.log(withoutSH);
const withSH = {
    brandName ,
    price
}               
console.log(withSH); 
// * storming
const objectCopy = {
    mobileBrand : brandName,
    priceOFmOBILE : price

}  
let extract = brandName[1];
console.log(objectCopy)
console.log(brandName);
extract = extract.toUpperCase();
console.log(extract);