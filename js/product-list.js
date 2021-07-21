const productsJson = `[
    {
        "id": "1",
        "title": "Baby Yoda",
        "imageUrl": "img/baby-yoda.svg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. ",
        "price": 10.99
    },
    {
        "id": "2",
        "title": "Girl",
        "imageUrl": "img/girl.svg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. ",
        "price": 9.99
    },
    {
        "id": "3",
        "title": "Banana",
        "imageUrl": "img/banana.svg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. ",
        "price": 7.99
    },
    {
        "id": "4",
        "title": "Viking",
        "imageUrl": "img/viking.svg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. ",
        "price": 6.99
    }
]`;

const products = JSON.parse(productsJson);

function renderProducts(products, sortOrder) {
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
            <button class="btn btn-primary">Buy - $${product.price}</button>
          </div>
        </article>`;
    }
    document.querySelector('.products').innerHTML = html;
}

renderProducts(products, 'ascending');

const btnSortAsc = document.querySelector('.sort-asc');
const btnSortDesc = document.querySelector('.sort-desc');

function sortAsc() {
    renderProducts(products, 'ascending');
}

function sortDesc() {
    renderProducts(products, 'descending');
}

btnSortAsc.addEventListener('click', sortAsc);
btnSortDesc.addEventListener('click', sortDesc);