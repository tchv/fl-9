// Your code goes here

let a = Number(prompt('Enter the length of side A:', '0')),
    b = Number(prompt('Enter the length of side B:', '0')),
    angle = Number(prompt('Enter the angle between the sides A and B:', '0'));

const angle180 = 180;
    
let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(angle * Math.PI / angle180)),
    p = a + b + c,
    s = a * b * Math.sin(angle * Math.PI / angle180) / 2;

if (a !== '' && a > 0 && b !== '' && b > 0 && angle !== '' && angle > 0) {
    console.log(
        'RESULT:',
        '\nC length:            ', Math.round(c * 100) / 100,
        '\nTriangle square:     ', Math.round(s * 100) / 100,
        '\nTriangle perimeter:  ', Math.round(p * 100) / 100
    );
} else {
    console.log(
        'RESULT:',
        '\nInvalid data!'
    );
}