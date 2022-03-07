const body = document.querySelector('body');
const sideBar = document.createElement('div');

const products = document.createElement('a');
const contact = document.createElement('a');
const signIn = document.createElement('a');
const share = document.createElement('a');
const order = document.createElement('a');

products.textContent = 'Productos';
contact.textContent = 'Contacto';
signIn.textContent = 'Sign In';
share.textContent = 'Share';
order.textContent = 'Order';


sideBar.appendChild(products);
sideBar.appendChild(contact);
sideBar.appendChild(signIn);
sideBar.appendChild(share);
sideBar.appendChild(order);

sideBar.classList.add('side-bar');
products.classList.add('side-bar-item');
contact.classList.add('side-bar-item');
signIn.classList.add('side-bar-item');
share.classList.add('side-bar-item');
order.classList.add('side-bar-item');



// FIX THIS SHIT
window.addEventListener('scroll', function() {
    const container = document.querySelector('#sign-up');
    var position = container.getBoundingClientRect();

    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight && sideBar) {
        console.log('Element is fully visible in screen');
        body.removeChild(sideBar);
    }else if(position.top < window.innerHeight && position.bottom >= 0) {  // checking for partial visibility
        console.log('Element is partially visible in screen');
        body.appendChild(sideBar);
    }
});
