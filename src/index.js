
const body = document.querySelector('body');
const sideBar = document.createElement('div');

const products = document.createElement('a');
const contact = document.createElement('a');
const signIn = document.createElement('a');
const share = document.createElement('a');

products.textContent = 'Productos';
contact.textContent = 'Contacto';
signIn.textContent = 'Sign In';
share.textContent = 'Share';



sideBar.appendChild(products);
sideBar.appendChild(contact);
sideBar.appendChild(signIn);
sideBar.appendChild(share);

body.appendChild(sideBar);

sideBar.classList.add('side-bar');
products.classList.add('side-bar-item');
contact.classList.add('side-bar-item');
signIn.classList.add('side-bar-item');
share.classList.add('side-bar-item');


