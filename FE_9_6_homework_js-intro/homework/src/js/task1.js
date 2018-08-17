// Your code goes here

let price = Number(prompt('Enter price:', '0')),
    discount = Number(prompt('Enter discont:', '0'));

let discountPrice = price - price * discount / 100,
    saved = price - discountPrice;

if (price !== '' && price >= 0 && discount !== '' && discount >= 0 && discount <= 100) {
    console.log(
        'RESULT:',
        '\nPrice without discount:', '$', Math.round(price * 100) / 100,
        '\nDiscount:              ', '%', Math.round(discount * 100) / 100,
        '\nPrice with discount:   ', '$', Math.round(discountPrice * 100) / 100,
        '\nSaved:                 ', '$', Math.round(saved * 100) / 100
    )
} else {
    console.log(
        'RESULT:',
        '\nInvalid data!'
    )
}