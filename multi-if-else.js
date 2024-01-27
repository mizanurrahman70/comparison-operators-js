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


//  children free condtion 

const age = 30 ;
const price =3000;
if (age <=17)
{
    console.log('you are totaly free ')
}
else if ( age >= 61){
    // 50% discount
    const discount = price * 50 / 100 ;
    var payAmount= price - discount
    console.log(payAmount)
    
}
else if (age >= 40){
    // 40% 
    var discount = price * 40 / 100 ;

    var payAmount = price - discount
    console.log(payAmount)
}
else{
    console.log(price)
}
