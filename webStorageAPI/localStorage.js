const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch'); // 'scratch' is a folder

localStorage.setItem('theme', 'dark'); // Saves 'theme=dark' in a file
console.log(localStorage.getItem('theme')); // Output: dark
