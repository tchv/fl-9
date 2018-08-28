// 1. Function, which returns type of passed parameter.

function findType(value) {
    return typeof value;
}

// 2. Function, which iterates over array and executes function on each element.

function forEach(arr, fun) {
    for (let i = 0, len = arr.length; i < len; i++) {
        fun(arr[i]);
    }
}

// 3. Function, which returns transformed array based on function, which passed as a parameter.

function map(arr, fun) {
    let newArr = [];
    forEach(arr, function(el) {
        newArr.push(fun(el));
    });
    return newArr;
}

// 4. Function, which returns filtered array based on function, which passed as a parameter.

function filter(arr, fun) {
    let newArr = [];
    forEach(arr, function(el) {
        if (fun(el)){
            newArr.push(el);
        }
    });
    return newArr;
}

// 5. Function, which returns array of names of people, who are over 18 and their favorite fruit is apple.

function getAdultAppleLovers(data) {
    return map(
        filter(data, function(el) {
        return el.favoriteFruit === 'apple' && el.age >= 18
    }), function(el) {
        return el.name
    })
}

// 6. Function, which returns array of keys of an object.

function keys(object) {
    let objectKeys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            objectKeys.push(key);
        }
    }
    return objectKeys;
}

// 7. Function, which returns array of values of an object.

function values(object) {
    let objectValue = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            objectValue.push(object[key]);
        }
    }
    return objectValue;
}

// 8. Function, which returns formatted date.

function showFormattedDate(date) {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}
