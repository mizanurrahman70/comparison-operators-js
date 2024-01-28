/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 15
let isStudent = false
let price =500
let seniorCitizen = false

if (age < 10){
    console.log('you are totally free ');
}
else if(isStudent === true){
    console.log('you wil get 50% discount');
    let discount = price * 50 / 100 ;
    let payAmount = price - discount ;
    console.log(payAmount);

}
else if (age  >= 60 && seniorCitizen === true){
    console.log('will get 15% Discount');
    let discount = price * 15 / 100 ;
    let payAmount = price - discount ;
    console.log(payAmount)
}
else {
    console.log(price)
}