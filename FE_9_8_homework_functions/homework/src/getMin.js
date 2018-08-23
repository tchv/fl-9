function getMin() {
    let base = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < base) {
            base = arguments[i];
        }
    }
    return base;
}