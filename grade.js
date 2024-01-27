/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const point = 59
if (point >= 100){
    console.log(' you got A++')
}
else if (point >=90 ){
    console.log('you got A+')
}
else if (
    point >=80
){
console.log('you got C ')}
else if (point >=70){
    console.log('D')
}
else if(point < 60){
    console.log('f')
}
