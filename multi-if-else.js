// Multiple  If else 
const Price = 1000;
if (Price >= 5000){
    // 10 % discount 
    var discount = Price * 10 / 100 ;
    
    var payAmount = Price - discount
    console.log(payAmount)
}
else if (Price >= 3000){
    // 5% discount
    var discount = Price * 5 / 100 ;
    var payAmount = Price - discount ;
    console.log ( payAmount)
}
else if (Price >= 2000){
    // 3% discount
    var discount = Price * 3 / 100 ;
    var payAmount = Price - discount
    console.log(payAmount)
}
else {
    console.log(Price)
}