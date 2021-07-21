// DOM - Document Object Model
/* HTML
     - head
     - body
      - header
        - nav
*/
const navBarBrand = document.querySelector(".navbar-brand");
navBarBrand.innerText += '!';

function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = (new Date()).toLocaleTimeString();
}

setInterval(updateClock, 1000);
