function reverseNumber(number) {
    let a = 0,
    b = 0 > number;

    b && (number *= -1);

    while (number > 0) {
    a *= 10;
    a += number % 10;
    number = parseInt(number / 10);
    }
    return b ? -a : a;
}