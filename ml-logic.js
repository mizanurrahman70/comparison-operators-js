// Multiple Logic condition chack 

const slary = 24000;
const BCS= true  ;
const hight = 7;
const car = false ;
if (slary <23000 && BCS == true){
    console.log(' ai hai eida hoilo suu patro')
}
else{
    console.log('nah tmk diya kaj hoibo na bhai . amra arekta patro khuji')
}
// more and more condtion 
if (slary < 2100 || 
    hight < 7 || BCS == true  ){
    console.log(
        'ami raji '
    )
}
else{
    console.log('onnota khuji')
}
// ............ complex condition ...................................
if( (slary > 26000 && hight > 6) || car == false){
    console.log( ' maiyar 14 gusti raji ')
}
else{
    console.log('nah bhai maf chai ')
}