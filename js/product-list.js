let products;
let sortOrder = 'ascending';
// Promise
// function loadProducts() {
//     fetch('products.json')
//         .then( response => response.json() )
//         .then( productsData => {
//             products = productsData;
//             renderProducts(products, 'ascending');
//         });
// }

async function loadProducts() {
    const response = await fetch('products.json');
    products = await response.json();
    renderProducts(products, 'ascending');
}

// AJAX Sample
// function loadProducts() {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             products = JSON.parse(xhr.responseText);
//             renderProducts(products, 'ascending');
//         }
//     }
//     xhr.open('GET', 'products.json', true);
//     xhr.send();
// }


function renderProducts() {
    const sortedProducts = [...products].sort(
      (a, b) => sortOrder === 'ascending' ? a.price - b.price : b.price - a.price       
    );
    let html = '';
    for (const product of sortedProducts) {
        html +=  `<article class="card col-12 col-sm-6 col-md-4 col-lg-3">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <button class="btn btn-info">Info</button>
            <button class="btn btn-primary">Buy - ${product.convertedPrice || product.price}</button>
          </div>
        </article>`;
    }
    document.querySelector('.products').innerHTML = html;
}

loadProducts();

const btnSortAsc = document.querySelector('.sort-asc');
const btnSortDesc = document.querySelector('.sort-desc');

function sortAsc() {
    sortOrder = 'ascending';
    renderProducts();
}

function sortDesc() {
    sortOrder = 'descending';
    renderProducts();
}

btnSortAsc.addEventListener('click', sortAsc);
btnSortDesc.addEventListener('click', sortDesc);

async function convertCurrency() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const currencies = await response.json();
    const targetCurrency = document.querySelector('.currency').value;
    let rate = currencies.rates[targetCurrency];
    if (rate === undefined) rate = 1;
    for (const product of products) {
        product.convertedPrice = (product.price * rate).toFixed(2);
    }
    renderProducts();
 }

document.querySelector('.convert').addEventListener('click', convertCurrency);