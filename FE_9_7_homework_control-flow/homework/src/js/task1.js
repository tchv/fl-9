// Your code goes here

const login = 'User';
const password = 'SuperUser';

let userLogin = prompt('Hello! Enter your login, please:', '');

if (userLogin === '' || userLogin === null) {
    alert('Canceled');
} else if (userLogin.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (userLogin !== login) {
    alert('I don’t know you');
} else {
    let userPassword = prompt('Enter your password:', '');
    if (userPassword === '' || userPassword === null) {
        alert('Canceled');
    } else if (userPassword === password) {
        alert(new Date().getHours() < 20 ? 'Good day!' : 'Good evening!');
    } else {
        alert('Wrong password');
    }
}
