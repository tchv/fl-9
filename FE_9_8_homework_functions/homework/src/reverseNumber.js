function reverseNumber(number) {
    const one = -1;
    const ten = 10;

    let a = 0,
    b = 0 > number;

    b && (number *= one);

    while (number > 0) {
        a *= ten;
        a += number % ten;
        number = parseInt(number / ten);
    }
    return b ? -a : a;
}
